import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-fleets',
  templateUrl: './page-fleets.component.html',
  styleUrls: ['./page-fleets.component.scss']
})
export class PageFleetsComponent implements OnInit {

  public ships: any
  public heroes: any

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    this.walletService.contract.methods.lightYear_userFleets(0).call({
      from: this.walletService.addr
    }).then((value: any) => {
      console.log(value[0])
      console.log(value[1])
      this.ships = value[0]
      this.heroes = value[1]
    })
  }


}
