import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";
import {FleetStatus} from "../page-fleets/fleet-status";

@Component({
  selector: 'app-page-explore',
  templateUrl: './page-explore.component.html',
  styleUrls: ['./page-explore.component.scss']
})
export class PageExploreComponent implements OnInit {

  addr: string = ""
  balance: number = 0
  fleets: any
  exploreFleetsSize = 0
  nowTime: any
  nowTimeString: any
  testArray:any

  constructor(private walletService: WalletService) {

  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.nowTime = Math.floor(Date.now()/1000)
    this.nowTimeString = new Date().toLocaleString()
    this.addr = await this.walletService.getAddress();
    this.fleets = await this.walletService.homeContract.methods.getFleets(this.addr).call();
    this.testArray = Object.assign([], this.testArray);
    for (let i = 0; i < this.fleets.length; i++) {
      let fleet = this.fleets[i]
      if (fleet.status == FleetStatus.Explore) {
        this.exploreFleetsSize++
      }
      //Object.defineProperty(fleet,"name",{value:"aaaa"})
      //fleet.name="a"
      this.testArray.push(fleet)
    }



  }

  startExplore(key: number) {
    this.walletService.homeContract.methods.fleetExplore(key).send({from: this.addr})
      .on('transactionHash', function(hash:any){

      })
      .on('error', function (error: any, receipt: any) {
        alert(error.message)
      }).then(()=>{
        this.refresh()
    })
  }

  endExplore(key: number) {
    this.walletService.homeContract.methods.fleetEndExplore(key).send({from: this.addr})
      .on('transactionHash', function(hash:any){

      })
      .on('error', function (error: any, receipt: any) {
        alert(error.message)
      }).then(()=>{
      this.refresh()
    })
  }
}
