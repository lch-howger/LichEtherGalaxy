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

  public window:any
  public web3:any
  public addr: string = ""

  constructor() {
    this.window=window
  }

  ngOnInit(): void {

  }

  testMain() {
    // this.web3=window.web3.cu
    //
    // this.window.ethereum.enable();
    //
    // web3.eth.getAccounts().then((addrs) => {
    //   console.log(addrs)
    // });
  }


}
