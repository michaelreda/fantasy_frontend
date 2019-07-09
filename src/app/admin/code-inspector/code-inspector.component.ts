import { CodeService } from './../../shared';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-code-inspector',
  templateUrl: './code-inspector.component.html',
  styleUrls: ['./code-inspector.component.css']
})
export class CodeInspectorComponent implements OnInit {
  code;
  result$;
  constructor(private codeService: CodeService) { }

  ngOnInit() {
  }

  inspectCode(code){
    if(code && code !=""){
      this.result$ = this.codeService.inspectCode(code);
    }
  }

}
import { DatePipe } from '@angular/common';
@Pipe({name: 'formatCodeInspectorResult'})
export class FormatCodeInspectorResult implements PipeTransform {
  constructor(public datePipe:DatePipe){} 
  transform(code) {
    let messageObject = {
      severity:"",
      summary: ""
    }
      if (!code.invalid) {
        if (code.isRedeemed) {
          messageObject.severity = "danger";
          messageObject.summary =
            "Redeemed by " +
            code.redeemedBy.name +
            " at " +
            this.datePipe.transform(code.redeemedAt,'hh:mma E dd-MM-yyyy' );
        } else {
          messageObject.severity = "success";
          messageObject.summary = "Code is not redeemed yet.";
        }
      } else {
        messageObject.severity = "danger";
        messageObject.summary = "Code is not valid";
      }
      return [messageObject];

  }
}

// [{
//   severity: result.isRedeemed?'danger':'success',
//   summary: result.isRedeemed? 'Redeemed by '+result.redeemedBy.name+' at '+ result.redeemedAt : 'Code is not redeemed.'
// }]"