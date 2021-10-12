import { Component, OnInit } from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-page-adventure',
  templateUrl: './page-adventure.component.html',
  styleUrls: ['./page-adventure.component.scss']
})
export class PageAdventureComponent implements OnInit {

  constructor(private walletService:WalletService) { }

  ngOnInit(): void {
    this
  }

}
