import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-tab-base',
  templateUrl: './tab-base.component.html',
  styleUrls: ['./tab-base.component.scss']
})
export class TabBaseComponent implements OnInit {

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
