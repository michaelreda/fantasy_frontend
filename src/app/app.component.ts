import { DialogService } from './dialog.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dialog;
  constructor(private dialogService:DialogService){
    this.dialogService.dialogObservable.subscribe(dialog=>{
      console.log(dialog);
      this.dialog = dialog;
    })
  }
}
