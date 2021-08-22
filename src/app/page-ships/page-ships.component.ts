import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";
import Web3 from 'web3';

@Component({
  selector: 'app-page-ships',
  templateUrl: './page-ships.component.html',
  styleUrls: ['./page-ships.component.scss'],
})
export class PageShipsComponent implements OnInit {

  addr: string = ""
  shipAmount: number = 0
  shipIdArray:number[]=[]

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    this.refresh()
  }


  async refresh() {
    this.addr = await this.walletService.getAddress()
    this.shipAmount = await this.walletService.contract.methods.balanceOf(this.addr).call();
    this.shipIdArray = await this.walletService.contract.methods.getOwnerTokens().call({from: this.addr});
    console.log(this.shipIdArray)
  }

  mintShip() {
    this.walletService.contract.methods.mintShip().send({
      from: this.addr,
      gas: 400000,
    })
  }
}
