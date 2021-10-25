import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";
import {getFleetStatusString, getFleetStatusStringEnglish} from "../page-fleets/fleet-status";

@Component({
  selector: 'app-tab-fleets',
  templateUrl: './tab-fleets.component.html',
  styleUrls: ['./tab-fleets.component.scss']
})
export class TabFleetsComponent implements OnInit {

  addr: any
  fleets: any = []
  nowTab = 0
  loaded: any = false

  constructor(private walletService: WalletService) {

  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()
    this.fleets = await this.walletService.homeContract.methods.getFleets(this.addr).call()
    this.loaded = true
  }

  createFleet() {
    this.walletService.homeContract.methods.createFleet().send({from: this.addr}).then(() => {
      this.refresh()
    })
  }

  getStatusString(key: any) {
    return getFleetStatusStringEnglish(key)
  }
}
