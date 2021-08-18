import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";
import Web3 from "web3";
import {abi_light_year} from "../../abi/abi_light_year";
import {config} from 'src/config/config';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss']
})
export class PageMainComponent implements OnInit {

  private window: any
  private web3: any
  public addr: string = ""

  constructor(private walletService: WalletService) {
    this.web3 = new Web3("https://http-testnet.hecochain.com");
    this.window = window
    this.window.ethereum.enable()
  }

  ngOnInit(): void {
    this.window.ethereum
      .request({method: 'eth_accounts'})
      .then((addrs: any) => {
        this.addr = addrs[0]
      })
  }

  testMain() {
    const contract = new this.web3.eth.Contract(abi_light_year, config.addr_light_year);
    contract.methods.lightYear_userList().call().then((value: any) => {
      console.log(value)
    })
  }


}
