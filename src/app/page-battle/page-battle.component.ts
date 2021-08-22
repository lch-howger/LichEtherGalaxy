import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-battle',
  templateUrl: './page-battle.component.html',
  styleUrls: ['./page-battle.component.scss']
})
export class PageBattleComponent implements OnInit {

  public addrs: string[] = []

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    this.walletService.shipContract.methods.lightYear_userList().call().then((addrs: any) => {
      this.addrs = addrs
    })
  }

  battle() {
    alert("a")
  }
}
