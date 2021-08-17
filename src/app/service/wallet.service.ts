import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  public str:string="a"

  constructor() {
    this.str="abc"
  }
}
