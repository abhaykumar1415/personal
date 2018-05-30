import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  getdata() {
    return JSON.parse(window.localStorage.getItem('data'));
  }
  addData(payload) {
    let existingData = this.getdata();
    if ( !existingData ) {
      existingData = [];
    } 
      existingData.push(payload);
      window.localStorage.setItem('data', JSON.stringify(existingData));
  }
  update(payload) {
    let data = this.getdata();
    data.map((record, index) => {
      if ( record.id === payload.id ) {
        data[index] = payload;
        window.localStorage.setItem('data', JSON.stringify(data));
      }
    });
  }
 }
