import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MontyHallServiceService } from 'src/app/Services/monty-hall-service.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MontyHall } from 'src/app/Models/MontyHall';

@Component({
  selector: 'app-monty-hall-view',
  templateUrl: './monty-hall-view.component.html',
  styleUrls: ['./monty-hall-view.component.scss']
})
export class MontyHallViewComponent {
  
  montyHallForm!: FormGroup;
  isRadioSelected: boolean = false;
  resData:MontyHall[]=[]; //for response data

  constructor(private dialog: MatDialog,public service:MontyHallServiceService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    console.log('Hello world !')
    this.initializeForm()

    this.isChanged()
  }

  //To initailize form
  initializeForm(){
    this.montyHallForm = this.formBuilder.group({
      numberField: ['', [Validators.required, Validators.max(1000001)]],
      radioField: ['', Validators.required]
    });
  }

  //Check whether user click radio button or not
  isChanged(){
     // Subscribe to radioField value changes
     this.montyHallForm.get('radioField')?.valueChanges.subscribe((value) => {
      this.isRadioSelected= !!value;
    });
  }



  postSimiulate(){
    this.isChanged()
    if (this.montyHallForm.valid && this.isRadioSelected) {
      // Process the form data
      const numberValue = this.montyHallForm.get('numberField')?.value;
      const radioValue = this.montyHallForm.get('radioField')?.value;
     
      const Data = {
        // username: username,
        numberOfSimulations: numberValue,
        changeDoor: radioValue
      };

      this.service.simiulate(Data).subscribe(
        res => {
          this.resData=res as MontyHall[];
          this.openDialog(this.resData)
        },
        err => {
          this.service.openSnackBar(err.message,'Close')
        },
      );
    }else {
      // Show error message or perform appropriate action
      this.service.openSnackBar('Please fill the form correctly','Close')
    }
   
   
  }

  openDialog(resData:any){
    const dialogRef = this.dialog.open(PopUpComponent, {
      
       width:'400px',
       height:'350px',
       disableClose:false,
       data:{
        NumberOfSimulations:resData.numberOfSimulations,
        Wins:resData.wins,
        Losses:resData.losses,
        WinPercentage:resData.winPercentage
       },
    });

    dialogRef.afterClosed().subscribe(() => {
    
    });
  }

}
