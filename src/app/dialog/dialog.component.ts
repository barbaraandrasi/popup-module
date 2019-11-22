import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  title: string;
  content: string;
<<<<<<< HEAD
  class: string;
  description: string;
=======
  class:string;
  description:string;
>>>>>>> only_1_button_version

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.content = this.data.content;
    this.title = this.data.title;
    this.class = this.data.class;
    this.description = this.data.description;
  }
}

