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

  depositedUserInfo: any
  depositedAmount: any
  depositedReward: any
  inputUsd: any

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

    this.depositedUserInfo = await this.walletService.stakingContract.methods.userInfo(0, this.addr).call();
    this.depositedAmount = this.depositedUserInfo.amount;
    this.depositedReward = this.depositedUserInfo.rewardDebt;
  }

  getUsd() {
    alert("请联系管理员浩哥")
  }

  deposit() {
    this.walletService.stakingContract.methods.deposit(0, this.inputUsd).send({from: this.addr}).then(()=>{
      this.refresh()
    })
  }

  withdraw() {
    this.walletService.stakingContract.methods.withdraw(0, this.inputUsd).send({from: this.addr}).then(()=>{
      this.refresh()
    })
  }

  payResource() {
    this.walletService.homeContract.methods.payResource().send({from: this.addr}).then(()=>{
      this.refresh()
    })
  }
}
