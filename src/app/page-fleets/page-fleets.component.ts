import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";
import {getFleetStatusString} from "./fleet-status";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-fleets',
  templateUrl: './page-fleets.component.html',
  styleUrls: ['./page-fleets.component.scss']
})
export class PageFleetsComponent implements OnInit {

  public addr: string = ""
  public fleetsSize: number = 0
  public fleets: any
  public fleetsString: string = ""

  constructor(private walletService: WalletService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress();
    this.fleets = await this.walletService.homeContract.methods.getFleets(this.addr).call()
    this.fleetsSize = this.fleets.length
  }

  createFleet() {
    this.walletService.homeContract.methods.createFleet().send({from: this.addr}).then(() => {
      this.refresh()
    })
  }

  getStatusString(key: any) {
    return getFleetStatusString(key)
  }

}
