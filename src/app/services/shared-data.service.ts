import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  getdata() {
    // console.log('getdata:', JSON.parse(window.localStorage.getItem('data')));
    return JSON.parse(window.localStorage.getItem('data'));
  }
  setData(payload) {
    JSON.stringify(window.localStorage.setItem('data', payload));
  }
 }
