import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss']
})
export class PageDetailComponent implements OnInit {

  fleetIndex: number = 0

  constructor(private walletService: WalletService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let index = params['index'];
      if (index == -1) {
        index = this.walletService.nowDetailIndex
      } else {
        this.walletService.nowDetailIndex = index;
      }
      this.fleetIndex = index
    });
  }


}
