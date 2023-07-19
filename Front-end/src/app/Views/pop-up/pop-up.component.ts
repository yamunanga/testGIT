import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MontyHall } from 'src/app/Models/MontyHall';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit{

  constructor( private dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{NumberOfSimulations:number,Wins:number, Losses:number,WinPercentage:number}) { }

    ngOnInit(): void {
     
    }
}
