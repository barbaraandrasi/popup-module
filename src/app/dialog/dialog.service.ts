import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

constructor(private dialog: MatDialog) { }

openDialog(params: dialogParams, button: buttonParams)
{
  this.dialog.open(DialogComponent, {
    data: {title: params.dialogTitle, 
      content: params.dialogContent,  
      class: button.btnClass,
      description: button.btnDescription
    }
  });
  }
}

export interface dialogParams
{
  dialogTitle: string; 
  dialogContent: string;
}

export interface buttonParams
{
    btnClass: string;
    btnDescription: string;
}
