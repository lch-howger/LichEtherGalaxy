import { Component, OnInit } from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-tab-market',
  templateUrl: './tab-market.component.html',
  styleUrls: ['./tab-market.component.scss']
})
export class TabMarketComponent implements OnInit {

  addr: any

  constructor(private walletService: WalletService) {

  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()
  }

}
