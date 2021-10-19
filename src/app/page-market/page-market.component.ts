import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-market',
  templateUrl: './page-market.component.html',
  styleUrls: ['./page-market.component.scss']
})
export class PageMarketComponent implements OnInit {

  addr: any
  fleets: any
  rankingList: any
  addrTokenIron:any
  addrTokenCopper:any
  addrTokenSilver:any
  addrTokenGold:any
  balanceResource:any
  balanceIron:any
  balanceCopper:any
  balanceSilver:any
  balanceGold:any

  constructor(private walletService: WalletService) {
    this.addrTokenIron = "https://testnet.bscscan.com/address/" + this.walletService.tokenIronContract._address
    this.addrTokenCopper = "https://testnet.bscscan.com/address/" + this.walletService.tokenCopperContract._address
    this.addrTokenSilver = "https://testnet.bscscan.com/address/" + this.walletService.tokenSilverContract._address
    this.addrTokenGold = "https://testnet.bscscan.com/address/" + this.walletService.tokenGoldContract._address

  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()

    this.balanceResource = await this.walletService.resourceContract.methods.balanceOf(this.addr).call()
    this.balanceIron = await this.walletService.tokenIronContract.methods.balanceOf(this.addr).call()
    this.balanceCopper = await this.walletService.tokenCopperContract.methods.balanceOf(this.addr).call()
    this.balanceSilver = await this.walletService.tokenSilverContract.methods.balanceOf(this.addr).call()
    this.balanceGold = await this.walletService.tokenGoldContract.methods.balanceOf(this.addr).call()

    this.fleets = await this.walletService.homeContract.methods.getFleets(this.addr).call()

    let userList = await this.walletService.homeContract.methods.getUserList().call();
    console.log(userList)
    let list = []
    for (let i = 0; i < userList.length; i++) {
      let balance = await this.walletService.tokenGoldContract.methods.balanceOf(userList[i]).call()
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
