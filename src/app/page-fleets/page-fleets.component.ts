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

  }


}
