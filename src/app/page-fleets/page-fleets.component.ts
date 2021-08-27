import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";
import {getFleetStatusString} from "./fleet-status";

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

  constructor(private walletService: WalletService) {
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

  guardHome(key: number) {
    this.walletService.homeContract.methods.guardHome(key).send({from: this.addr}).then(() => {
      this.refresh()
    })
  }

  goHome(key: number) {
    this.walletService.homeContract.methods.goHome(key).send({from: this.addr}).then((value:any,error:any) => {
      this.refresh()
    });
  }


}
