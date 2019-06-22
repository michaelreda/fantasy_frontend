import { LoaderService } from './loader.service';
import { DialogService } from './dialog.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dialog;
  @ViewChild('loader') loader;
  constructor(private dialogService:DialogService, private loaderService:LoaderService){
    this.dialogService.dialogObservable.subscribe(dialog=>{
      this.dialog = dialog;
    })
    this.loaderService.isLoading.asObservable().subscribe(isloading=>{
      if(isloading == true)
        this.loader.nativeElement.style.display = 'initial';
      else
        this.loader.nativeElement.style.display = 'none';
    })
  }
}
