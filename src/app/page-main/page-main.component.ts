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

  private web3: any
  private ethereum: any
  public addr: string = ""

  constructor(private walletService: WalletService) {
    this.web3 = walletService.web3
    this.ethereum = walletService.ethereum
    this.ethereum.enable()
  }

  ngOnInit(): void {
    this.addr = this.walletService.addr
  }

  testMain() {
    const contract = new this.web3.eth.Contract(abi_light_year, config.addr_light_year);
    contract.methods.lightYear_userList().call().then((value: any) => {
      console.log(value)
    })
  }


}
