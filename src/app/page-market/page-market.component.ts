import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-market',
  templateUrl: './page-market.component.html',
  styleUrls: ['./page-market.component.scss']
})
export class PageMarketComponent implements OnInit {

  addr: any
  balance: any
  fleets:any

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()
    this.balance = await this.walletService.resourceContract.methods.balanceOf(this.addr).call()
    this.fleets = await this.walletService.homeContract.methods.getFleets(this.addr).call()
  }

  sellResource(index:number) {
    this.walletService.homeContract.methods.sellResource(index).send({from: this.addr}).then(() => {
      this.refresh()
    })
  }

  goHome(index:number) {
    this.walletService.homeContract.methods.goHome(index).send({from: this.addr}).then(() => {
      this.refresh()
    })
  }

  timestamp() {
    return new Date().getTime()
  }

}
