import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {NewExposantComponent} from "./Component/Exposant/new-exposant/new-exposant.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}


  actions:Array<any>=[
    {title:"Home","route":"/home",icon:"house"},
    {title:"Exposants","route":"/exposants",icon:"archive"},
    {title:"Livres","route":"/livres",icon:"book"},
  ];

  currentAction : any;

  setCurrentAction(action: any) {
    this.currentAction=action;
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(NewExposantComponent, dialogConfig);
  }

}
