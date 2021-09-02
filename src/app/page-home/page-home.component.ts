import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";
import {getFleetStatusString} from "../page-fleets/fleet-status";

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  addr: string = ""
  guardFleet: any
  asset: any = []
  userInfo: any
  historyLength: any
  myBytes: any
  fleets: any
  shipIdArray: any
  freeShipArray: string[] = []

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress();
    this.guardFleet = await this.walletService.homeContract.methods.getGuardFleet(this.addr).call()
    this.asset = await this.walletService.homeContract.methods.ownerAssetMap(this.addr).call()
    this.userInfo = await this.walletService.homeContract.methods.ownerUserInfoMap(this.addr).call();

    this.fleets = await this.walletService.homeContract.methods.getFleets(this.addr).call()
    this.shipIdArray = await this.walletService.shipContract.methods.getOwnerTokens().call({from: this.addr});

    for (let i = 0; i < this.shipIdArray.length; i++) {
      this.freeShipArray.push(this.shipIdArray[i])
    }

    for (let i = 0; i < this.fleets.length; i++) {
      let fleet = this.fleets[i];
      for (let j = 0; j < fleet.shipIdArray.length; j++) {
        let index = this.freeShipArray.indexOf(fleet.shipIdArray[j]);
        this.freeShipArray.splice(index, 1)
      }
    }

  }

  getStatusString(key: any) {
    return getFleetStatusString(key)
  }

  test() {
  }
}
