import {Injectable} from '@angular/core';
import Web3 from "web3";
import {abi} from "../../abi/abi_light_year";
import {config} from "../../config/config";
import {log} from "util";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  public web3: any
  public window: any
  public contract: any

  constructor() {
    this.window = window
    this.web3 = new this.window['Web3'](this.window['ethereum']);

    //contract
    this.contract = new this.web3.eth.Contract(abi.abi_ship, config.addr_ship);

  }

  async getAddress(): Promise<string> {
    let addrs = await this.web3.eth.getAccounts();
    return addrs[0]
  }

  getBalance() {
  }
}
