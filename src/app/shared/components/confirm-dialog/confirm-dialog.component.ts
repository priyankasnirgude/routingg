import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

 // displayMsg !: string
  constructor(
    private _matDialogRef : MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public info : string
  ) { 
    console.log(info);
   // this.displayMsg = info
  }

  ngOnInit(): void {
  }

  giveConfirmationMsg(flag : boolean){
    this._matDialogRef.close(flag)
  }
}
