import {Injectable} from '@angular/core';
import Web3 from "web3";
import {abi_light_year} from "../../abi/abi_light_year";
import {config} from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  public web3: any
  public window: any
  public ethereum: any
  public contract: any
  public addr: string = ""

  constructor() {
    this.web3 = new Web3("https://http-testnet.hecochain.com");
    this.window = window
    this.ethereum = this.window.ethereum

    //contract
    this.contract = new this.web3.eth.Contract(abi_light_year, config.addr_light_year);

    //get addr
    this.ethereum
      .request({method: 'eth_accounts'})
      .then((addrs: any) => {
        this.addr = addrs[0]
      })
  }

  getBalance() {

  }
}
