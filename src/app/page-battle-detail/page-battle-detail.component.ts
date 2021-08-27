import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-battle-detail',
  templateUrl: './page-battle-detail.component.html',
  styleUrls: ['./page-battle-detail.component.scss']
})
export class PageBattleDetailComponent implements OnInit {

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
  }

}
