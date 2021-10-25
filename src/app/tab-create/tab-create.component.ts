import { Component, OnInit } from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-tab-create',
  templateUrl: './tab-create.component.html',
  styleUrls: ['./tab-create.component.scss']
})
export class TabCreateComponent implements OnInit {

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
