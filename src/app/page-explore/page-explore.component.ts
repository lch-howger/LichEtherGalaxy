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
  nowTime: any
  nowTimeString: any
  planetAmount:any

  constructor(private walletService: WalletService) {

  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.nowTime = Math.floor(Date.now()/1000)
    this.nowTimeString = new Date().toLocaleString()
    this.addr = await this.walletService.getAddress();

    this.planetAmount=await this.walletService.homeContract.methods.planetAmount().call()
    console.log(this.planetAmount)

  }

}
