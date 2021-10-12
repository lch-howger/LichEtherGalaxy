import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WalletService} from "../service/wallet.service";
import {getFleetStatusString} from "../page-fleets/fleet-status";

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit {

  addr: string = ""
  fleetIndex: number = 0
  fleet: any = [0, 0, 0, 0, [], [], 0]
  userList: any
  battleInfo: any
  fleetLoad: number = 0
  fleetAttack: number = 0

  constructor(private walletService: WalletService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let index = params['index'];
      if (index == undefined || index == -1) {
        index = this.walletService.nowDetailIndex
      } else {
        this.walletService.nowDetailIndex = index;
      }
      this.fleetIndex = index
      this.refresh()
    });
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()
    this.fleet = await this.walletService.homeContract.methods.getFleet(this.addr, this.fleetIndex).call();
    this.userList = await this.walletService.homeContract.methods.getUserList().call()

    this.fleetAttack = 0;
    for (let i = 0; i < this.fleet.shipIdArray.length; i++) {
      let shipId = this.fleet.shipIdArray[i]
      let ship = await this.walletService.shipContract.methods.getShipByTokenId(shipId).call();
      this.fleetAttack += parseInt(ship.attack)
    }
  }

  guardHome() {
    this.walletService.homeContract.methods.guardHome(this.fleetIndex).send({from: this.addr}).then(() => {
      this.refresh()
    })
  }

  goHome() {
    this.walletService.homeContract.methods.goHome(this.fleetIndex).send({from: this.addr}).then((value: any, error: any) => {
      this.refresh()
    });
  }

  arriveHome() {
    this.walletService.homeContract.methods.arriveHome(this.fleetIndex).send({from: this.addr}).then((value: any, error: any) => {
      this.refresh()
    });
  }

  getStatusString(key: any) {
    return getFleetStatusString(key)
  }

  goBattle(target: string) {
    // this.walletService.battleContract.methods.viewBattle().call().then((value: any) => {
    //   this.battleInfo = value
    //   console.log(value)
    // })
    this.walletService.battleContract.methods.goBattle(target, this.fleetIndex).send({from: this.addr}).then(() => {
      this.refresh()
    })
  }

  battle() {
    this.walletService.battleContract.methods.battle(this.fleetIndex).send({from: this.addr}).then(() => {
      this.refresh()
    })
  }

  loadResource() {
    this.walletService.homeContract.methods.loadResource(this.fleetIndex, this.fleetLoad).send({from: this.addr}).then(() => {
      this.refresh()
    })
  }

  goMarket() {
    this.walletService.homeContract.methods.goMarket(this.fleetIndex).send({from: this.addr}).then(() => {
      this.refresh()
    })
  }

  goAdventure() {
    this.walletService.homeContract.methods.goAdventure(this.fleetIndex).send({from: this.addr}).then(() => {
      this.refresh()
    })
  }
}
