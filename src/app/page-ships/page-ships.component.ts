import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";
import Web3 from 'web3';

@Component({
  selector: 'app-page-ships',
  templateUrl: './page-ships.component.html',
  styleUrls: ['./page-ships.component.scss'],
})
export class PageShipsComponent implements OnInit {

  addr: string = ""
  shipAmount: number = 0
  shipIdArray: number[] = []
  ship: any;
  shipArray:string[]=[]
  fleetNumberArray:number[]=[]
  public fleetsSize: number = 0
  public fleets: any

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()
    this.shipAmount = await this.walletService.shipContract.methods.balanceOf(this.addr).call();
    this.shipIdArray = await this.walletService.shipContract.methods.getOwnerTokens().call({from: this.addr});

    this.fleets = await this.walletService.homeContract.methods.getFleets(this.addr).call()
    this.fleetsSize = this.fleets.length
    for (let i = 0; i < this.fleetsSize; i++) {
      this.fleetNumberArray.push(i)
    }
  }

  mintShip() {
    this.walletService.shipContract.methods.mintShip().send({
      from: this.addr,
      gas: 400000,
    }).then(() => {
      this.refresh()
    })
  }

  async shipDetail(index: number) {
    this.ship = await this.walletService.shipContract.methods.getShipByTokenId(index).call();
  }

  chooseFleet(tokenId:number,fleetIndex:number) {
    this.walletService.homeContract.methods.operateFleetShip(tokenId, fleetIndex).send({from: this.addr});
  }
}
