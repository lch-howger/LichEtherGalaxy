import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-staking',
  templateUrl: './page-staking.component.html',
  styleUrls: ['./page-staking.component.scss']
})
export class PageStakingComponent implements OnInit {

  addr: any

  balanceUsd: any;
  balanceResource: any
  balanceIron: any
  balanceCopper: any
  balanceSilver: any
  balanceGold: any

  constructor(private walletService: WalletService) {

  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()
    this.balanceUsd = await this.walletService.tokenUsdContract.methods.balanceOf(this.addr).call();
    this.balanceResource = await this.walletService.resourceContract.methods.balanceOf(this.addr).call()
    this.balanceIron = await this.walletService.tokenIronContract.methods.balanceOf(this.addr).call()
    this.balanceCopper = await this.walletService.tokenCopperContract.methods.balanceOf(this.addr).call()
    this.balanceSilver = await this.walletService.tokenSilverContract.methods.balanceOf(this.addr).call()
    this.balanceGold = await this.walletService.tokenGoldContract.methods.balanceOf(this.addr).call()
  }

}
