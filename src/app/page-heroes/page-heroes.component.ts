import { Component, OnInit } from '@angular/core';
import web3 from "web3";
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-heroes',
  templateUrl: './page-heroes.component.html',
  styleUrls: ['./page-heroes.component.scss']
})
export class PageHeroesComponent implements OnInit {

  constructor(private walletService:WalletService) { }

  ngOnInit(): void {

    this.walletService.web3.eth.getAccounts().then((addrs: any) => {
      console.log(addrs)
    });

    //this.walletService.contract.methods.lightYear_mintShip().send({from: addr})
  }

}
