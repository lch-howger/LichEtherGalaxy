import {Injectable} from '@angular/core';
import Web3 from "web3";
import {contractAbi} from "../../abi/abi_light_year";
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
  public raresContract: any
  public battleContract: any
  public testContract: any

  public nowDetailIndex: number = 0

  constructor() {
    this.window = window
    this.web3 = new this.window['Web3'](this.window['ethereum']);

    this.web3.eth.getAccounts().then((value: any) => {
      console.log(value)
    })

    //contract
    this.registryContract = new this.web3.eth.Contract(contractAbi.abi_registry, config.addr_registry);
    this.shipContract = new this.web3.eth.Contract(contractAbi.abi_ship, config.addr_ship);
    this.homeContract = new this.web3.eth.Contract(contractAbi.abi_home, config.addr_home_proxy);
    this.raresContract = new this.web3.eth.Contract(contractAbi.abi_rares, config.addr_rares);
    this.battleContract = new this.web3.eth.Contract(contractAbi.abi_battle, config.addr_battle);
    this.testContract = new this.web3.eth.Contract(contractAbi.abi_test, config.addr_test);
  }

  async getAddress(): Promise<string> {
    let addrs = await this.web3.eth.getAccounts();
    return addrs[0]
  }

  connectWallet() {
    this.window['ethereum'].enable()
  }

  getBalance() {
  }

}
