import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MontyHallServiceService {

  api='http://localhost:2210/api/MontyHall'

  constructor(private http: HttpClient,private router : Router,private _snackBar: MatSnackBar) { }

  //Simiulate
  simiulate(data: any){
    return this.http.post(this.api+`/simulate`,data);
  }

  //to show notification
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
