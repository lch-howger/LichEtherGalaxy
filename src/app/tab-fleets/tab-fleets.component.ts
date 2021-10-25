import { Component, OnInit } from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-tab-fleets',
  templateUrl: './tab-fleets.component.html',
  styleUrls: ['./tab-fleets.component.scss']
})
export class TabFleetsComponent implements OnInit {

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
