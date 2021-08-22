import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-fleets',
  templateUrl: './page-fleets.component.html',
  styleUrls: ['./page-fleets.component.scss']
})
export class PageFleetsComponent implements OnInit {

  public addr: string = ""
  public fleetsSize: number = 0
  public fleets: any
  public fleetsString:string=""
  public fleet0: any
  public fleet1: any
  public fleet2: any
  public fleet3: any
  public fleet4: any

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress();
    this.fleets = await this.walletService.homeContract.methods.getFleets(this.addr).call()
    this.fleetsString=this.handleFleets(this.fleets)
    this.fleetsSize = this.fleets.length
    this.fleet0=this.fleets[0]
  }

  createFleet() {
    this.walletService.homeContract.methods.createFleet().send({from: this.addr}).then(() => {
      this.refresh()
    })
  }

  handleFleets(fleets:number[][]) {
    let s=""
    for (let i = 0; i < fleets.length; i++) {
      let arr=fleets[i]
      s+="["
      for (let j = 0; j < arr.length; j++) {
        s+=""+arr[j]
      }
      s+="],"
    }
    return s
  }

}
