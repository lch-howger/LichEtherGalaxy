import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-adventure',
  templateUrl: './page-adventure.component.html',
  styleUrls: ['./page-adventure.component.scss']
})
export class PageAdventureComponent implements OnInit {

  addr: any
  fleets: any

  constructor(private walletService: WalletService) {

  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()
    this.fleets = await this.walletService.homeContract.methods.getFleets(this.addr).call()
  }

  endAdventure(index: number) {
    this.walletService.homeContract.methods.endAdventure(index).send({from: this.addr}).then(() => {
      this.refresh()
    })
  }

}
