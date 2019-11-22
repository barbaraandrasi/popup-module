import { Component } from '@angular/core';
import { DialogService, dialogParams, buttonParams } from './dialog/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: DialogService) {

  }

  show()
  {
    let params : dialogParams = {
      dialogTitle: "Title",
      dialogContent: "Content"
    }

    let buttons: buttonParams[] = [
      {"btnClass": "btn btn-primary", "btnDescription": "OK"},
      {"btnClass": "btn btn-primary", "btnDescription": "Cancel"}
    ]
    this.dialog.openDialog(params,buttons[0]);
  }

}
