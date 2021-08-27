import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  addr: string = ""
  guardFleet: any
  asset: any=[]

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress();
    this.guardFleet = await this.walletService.homeContract.methods.getGuardFleet(this.addr).call()
    this.asset = await this.walletService.homeContract.methods.ownerAssetMap(this.addr).call()
  }
}
