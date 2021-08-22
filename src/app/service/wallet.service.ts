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
  public registryContract: any
  public shipContract: any
  public homeContract: any

  constructor() {
    this.window = window
    this.web3 = new this.window['Web3'](this.window['ethereum']);

    //contract
    this.registryContract = new this.web3.eth.Contract(abi.abi_registry, config.addr_registry);
    this.shipContract = new this.web3.eth.Contract(abi.abi_ship, config.addr_ship);
    this.homeContract = new this.web3.eth.Contract(abi.abi_home, config.addr_home);
  }

  async getAddress(): Promise<string> {
    let addrs = await this.web3.eth.getAccounts();
    return addrs[0]
  }

  getBalance() {
  }
}
