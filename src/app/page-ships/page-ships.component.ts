import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";
import web3 from 'web3';
import "./page-ships"

@Component({
  selector: 'app-page-ships',
  templateUrl: './page-ships.component.html',
  styleUrls: ['./page-ships.component.scss'],
})
export class PageShipsComponent implements OnInit {

  mint: any;

  constructor(private walletService: WalletService) {
    this.walletService.ethereum.enable()
  }

  ngOnInit(): void {
  }

  mintShip() {


    // this.walletService.contract.methods.lightYear_mintShip().send().then((value: any) => {
    //   console.log(value)
    // })

    console.log(this.walletService.ethereum.isConnected())

    console.log(this.walletService.addr)
    var addr: string = this.walletService.addr
    // this.walletService.contract.methods.lightYear_mintShip().send({
    //     "from": addr
    //   });

    //lightYear_userFleets
    this.walletService.contract.methods.lightYear_userFleets(0).call(
      {
        from:addr
      }
    )
      .then((value:any)=>{
        console.log(value)
      })

    // .then(function (receipt: any) {
    //   console.log(receipt)
    // });
  }
}
