import {Component, OnInit} from '@angular/core';
import Web3 from "web3";
import {WalletService} from "../service/wallet.service";
import {config} from "../../config/config";

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss']
})
export class PageMainComponent implements OnInit {

  public addr: string = ""
  public registryAddr: string = ""
  public shipAddr: string = ""
  public heroAddr: string = ""
  public homeAddr: string = ""
  public battleAddr: string = ""
  param:any

  constructor(private walletService: WalletService) {

  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()
    this.registryAddr = config.addr_registry;
    this.shipAddr = await this.walletService.registryContract.methods.ship().call()
    this.heroAddr = await this.walletService.registryContract.methods.hero().call()
    this.homeAddr = await this.walletService.registryContract.methods.home().call()
    this.battleAddr = await this.walletService.registryContract.methods.battle().call()
    this.param={from:this.addr}
  }

  setShip() {
    this.walletService.registryContract.methods.setShip(this.shipAddr).send(this.param)
  }

  setHero() {
    this.walletService.registryContract.methods.setHero(this.heroAddr).send(this.param)
  }

  setHome() {
    this.walletService.registryContract.methods.setHome(this.homeAddr).send(this.param)
  }

  setBattle() {
    this.walletService.registryContract.methods.setBattle(this.battleAddr).send(this.param)
  }
}
