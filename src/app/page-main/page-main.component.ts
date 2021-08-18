import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";
import Web3 from "web3";

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss']
})
export class PageMainComponent implements OnInit {

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
  }

  testMain() {
    alert(this.walletService.str)
  }

  web3 = new Web3("https://http-testnet.hecochain.com");

}
