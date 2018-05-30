import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  /** 
   * Function to get data from localstorage.
  */
  getdata() {
    return JSON.parse(window.localStorage.getItem('data'));
  }

  /**
   * 
   * @param payload Function to add data to localstorage.
   */
  addData(payload) {
    let existingData = this.getdata();
    if ( !existingData ) {
      existingData = [];
    } 
      existingData.push(payload);
      window.localStorage.setItem('data', JSON.stringify(existingData));
  }

  /**
   * Function to update localStorge data.
   * @param payload
   */
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
