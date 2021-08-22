import {Component, OnInit} from '@angular/core';
import Web3 from "web3";
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss']
})
export class PageMainComponent implements OnInit {

  public addr: string = ""

  constructor(private walletService: WalletService) {
    this.addr = this.walletService.addr
  }

  ngOnInit(): void {
    this.loadAddress()
  }

  async loadAddress() {
    this.addr = await this.walletService.getAddress()
  }

  testMain() {
    this.walletService.contract.methods.mintShip().send({
      from: this.addr,
      gas: 400000,
    })
  }


}
