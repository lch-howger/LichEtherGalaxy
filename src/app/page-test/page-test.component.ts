import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";
import {addWarning} from "@angular-devkit/build-angular/src/utils/webpack-diagnostics";

@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.scss']
})
export class PageTestComponent implements OnInit {

  addr: any
  registryShip: any
  registryFleets: any
  registryHome: any
  registryLightYear: any

  inputLightYear: any
  inputHome: any
  inputFleets: any
  homeAssets: any

  constructor(private walletService: WalletService) {

  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()
    this.registryShip = await this.walletService.newRegistryContract.methods.ship().call()
    this.registryFleets = await this.walletService.newRegistryContract.methods.fleets().call()
    this.registryHome = await this.walletService.newRegistryContract.methods.home().call()
    this.registryLightYear = await this.walletService.newRegistryContract.methods.lightYear().call()
    this.homeAssets = await this.walletService.newHomeContract.methods.userAsset(this.addr).call()
  }

  setLightYearAddress() {
    this.walletService.newRegistryContract.methods.setLightYear(this.inputLightYear).send({from: this.addr})
  }

  setHomeAddress() {
    this.walletService.newHomeProxyContract.methods.setHome(this.inputHome).send({from: this.addr})
  }

  setFleetsAddress() {

  }

  async checkMsgSender() {
    let msg = await this.walletService.newLightYearContract.methods.testCheckMsgSender().call()
    alert(msg)
  }

  addHomeAssets() {
    this.walletService.newLightYearContract.methods.testAddHomeAssets().send({from: this.addr})
  }

  addHomeAssetsOperator() {
    this.walletService.newLightYearContract.methods.testAddHomeAssetsOperator().send({from: this.addr})
  }

  upgradeHomeLevel() {
    //this.walletService.newLightYearContract.methods.
  }
}
