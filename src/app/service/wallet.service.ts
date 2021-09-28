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
  public heroContract: any
  public shipContract: any
  public homeContract: any
  public raresContract: any
  public battleContract: any
  public testContract: any
  public homeProxyContract: any

  public nowDetailIndex: number = 0

  constructor() {
    this.window = window
    this.web3 = new this.window['Web3'](this.window['ethereum']);

    this.web3.eth.getAccounts().then((value: any) => {
    })

    //contract
    this.registryContract = new this.web3.eth.Contract(contractAbi.abi_registry, config.addr_registry);
    this.heroContract = new this.web3.eth.Contract(contractAbi.abi_hero, config.addr_hero);
    this.shipContract = new this.web3.eth.Contract(contractAbi.abi_ship, config.addr_ship);
    this.homeContract = new this.web3.eth.Contract(contractAbi.abi_home, config.addr_home_proxy);
    this.raresContract = new this.web3.eth.Contract(contractAbi.abi_rares, config.addr_rares);
    this.battleContract = new this.web3.eth.Contract(contractAbi.abi_battle, config.addr_battle);
    this.testContract = new this.web3.eth.Contract(contractAbi.abi_test, config.addr_test);
    this.homeProxyContract = new this.web3.eth.Contract(contractAbi.abi_home_proxy, config.addr_home_proxy);

    this.shipContract.events.Transfer({}, function (error: any, event: any) {
      console.log(error)
      console.log(event);
    })
  }

  async getAddress(): Promise<string> {
    let addrs = await this.web3.eth.getAccounts();
    return addrs[0]
  }

  connectWallet() {
    // this.window['ethereum'].enable()
    // this.window['ethereum'].on('accountsChanged', function () {
    // })
    // this.window['ethereum'].request({ method: 'eth_requestAccounts' }).then(()=>{
    //   console.log("aaaaaaaaaaaaaaa")
    //   console.log("aaaaaaaaaaaaaaa")
    //   console.log("aaaaaaaaaaaaaaa")
    //   console.log("aaaaaaaaaaaaaaa")
    // })
  }

  getBalance() {
  }

}
