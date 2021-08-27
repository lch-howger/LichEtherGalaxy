import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-battle',
  templateUrl: './page-battle.component.html',
  styleUrls: ['./page-battle.component.scss']
})
export class PageBattleComponent implements OnInit {

  addr: string = ""
  userInfo: any
  battleInfo: any

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()
    this.battleInfo = await this.walletService.homeContract.methods.getUserBattleHistory(0).call();
  }

}
