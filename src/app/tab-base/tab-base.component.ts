import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-tab-base',
  templateUrl: './tab-base.component.html',
  styleUrls: ['./tab-base.component.scss']
})
export class TabBaseComponent implements OnInit {

  addr: any
  asset: any = []
  userInfo: any = []
  fleets: any = []
  power: any

  constructor(private walletService: WalletService) {

  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()
    this.asset = await this.walletService.homeContract.methods.ownerAssetMap(this.addr).call()
    this.userInfo = await this.walletService.homeContract.methods.ownerUserInfoMap(this.addr).call();
    this.fleets = await this.walletService.homeContract.methods.getFleets(this.addr).call()

    let l01 = await this.walletService.stakingContract.methods.userInfo(0, this.addr).call()
    let l02 = await this.walletService.stakingContract.methods.userInfo(1, this.addr).call()
    this.power = "(" + l01.amount + " + " + l02.amount + ")"
  }

}
