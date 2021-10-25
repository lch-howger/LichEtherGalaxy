import { Component, OnInit } from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-tab-staking',
  templateUrl: './tab-staking.component.html',
  styleUrls: ['./tab-staking.component.scss']
})
export class TabStakingComponent implements OnInit {

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
