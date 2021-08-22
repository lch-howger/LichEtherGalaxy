import {Injectable} from '@angular/core';
import Web3 from "web3";
import {abi_ship} from "../../abi/abi_light_year";
import {config} from "../../config/config";
import {log} from "util";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  public web3: any
  public window: any
  public contract: any
  public addr: string = ""

  constructor() {
    this.window = window
    this.web3 = new this.window['Web3'](this.window['ethereum']);

    //contract
    this.contract = new this.web3.eth.Contract(abi_ship, config.addr_light_year);

  }

  async getAddress()  {
    let address=await this.web3.eth.getAccounts()
    return address[0]
  }

  getBalance() {

  }
}
