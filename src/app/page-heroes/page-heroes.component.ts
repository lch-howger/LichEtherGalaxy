import { Component, OnInit } from '@angular/core';
import web3 from "web3";
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-heroes',
  templateUrl: './page-heroes.component.html',
  styleUrls: ['./page-heroes.component.scss']
})
export class PageHeroesComponent implements OnInit {

  addr: string = ""
  heroAmount: number = 0
  heroIdArray: number[] = []
  hero: any;
  heroArray:string[]=[]
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
    this.heroAmount = await this.walletService.heroContract.methods.balanceOf(this.addr).call();
    this.heroIdArray = await this.walletService.heroContract.methods.getOwnerTokens().call({from: this.addr});

    this.fleets = await this.walletService.homeContract.methods.getFleets(this.addr).call()
    this.fleetsSize = this.fleets.length
    for (let i = 0; i < this.fleetsSize; i++) {
      this.fleetNumberArray.push(i)
    }
  }

  mintHero() {
    this.walletService.heroContract.methods.mintHero().send({
      from: this.addr,
      gas: 400000,
    }).then(() => {
      this.refresh()
    })
  }

  async heroDetail(index: number) {
    this.hero = await this.walletService.shipContract.methods.getHeroByTokenId(index).call();
  }

  chooseFleet(tokenId:number,fleetIndex:number) {
    this.walletService.homeContract.methods.operateFleetHero(tokenId, fleetIndex).send({from: this.addr});
  }

}
