import {Injectable} from '@angular/core';
import Web3 from "web3";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  public web3: any
  public window: any
  public ethereum: any
  public addr: string = ""

  constructor() {
    this.web3 = new Web3("https://http-testnet.hecochain.com");
    this.window = window
    this.ethereum = this.window.ethereum

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
