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
  fleets: any
  erc20address: any
  rankingList: any

  constructor(private walletService: WalletService) {
    this.erc20address = "https://testnet.bscscan.com/address/" + this.walletService.resourceContract._address

  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()
    this.balance = await this.walletService.resourceContract.methods.balanceOf(this.addr).call()
    this.fleets = await this.walletService.homeContract.methods.getFleets(this.addr).call()

    let userList = await this.walletService.homeContract.methods.getUserList().call();
    console.log(userList)
    let list = []
    for (let i = 0; i < userList.length; i++) {
      let balance = await this.walletService.resourceContract.methods.balanceOf(userList[i]).call()
      let item = {
        addr: userList[i],
        balance: balance
      }
      list.push(item)
    }

    list.sort(function (a, b) {
      if (a.balance < b.balance) {
        return 1
      } else {
        return -1
      }
    })

    console.log(list)
    this.rankingList = list
  }

  sellResource(index: number) {
    this.walletService.homeContract.methods.sellResource(index).send({from: this.addr}).then(() => {
      this.refresh()
    })
  }

  goHome(index: number) {
    this.walletService.homeContract.methods.goHome(index).send({from: this.addr}).then(() => {
      this.refresh()
    })
  }

  timestamp() {
    return new Date().getTime()
  }

}
