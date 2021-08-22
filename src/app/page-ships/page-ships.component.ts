import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";
import Web3 from 'web3';

@Component({
  selector: 'app-page-ships',
  templateUrl: './page-ships.component.html',
  styleUrls: ['./page-ships.component.scss'],
})
export class PageShipsComponent implements OnInit {

  mint: any;
  window:any
  ethereum:any

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
  }

  mintShip() {

  //   let web3 = new Web3('https://http-testnet.huobichain.com');
  //   web3.setProvider(new Web3.providers.WebsocketProvider('wss://ws-testnet.hecochain.com'));
  //
  //   this.window=window
  //   this.ethereum=this.window.ethereum
  //   this.window.ethereum.enable()
  //
  // this.ethereum.request({ method: 'eth_accounts' }).then((addrs:any)=>{
  //   console.log(addrs)
  //
  //   this.walletService.contract.methods.lightYear_mintShip().send({from: addrs[0]})
  // });



    //web3.eth.requestAccounts().then(console.log);

    // this.walletService.contract.methods.lightYear_mintShip().send().then((value: any) => {
    //   console.log(value)
    // })

    // this.walletService.window.web3.eth.getAccounts().then((addrs: any) => {
    //   console.log(addrs)
    // });

    // var addr: string = this.walletService.addr
    // console.log(addr)
    //
    // this.walletService.ethereum.enable()

    // this.walletService.web3.eth.getAccounts().then((addrs: any) => {
    //   console.log(addrs)
    // });


    // console.log(this.walletService.ethereum.isConnected())
    //
    //
    // this.walletService.contract.methods.lightYear_mintShip().send({from: addr})
    //   .on('transactionHash', function (hash: any) {
    //     console.log(hash)
    //     console.log(1)
    //   })
    //   .on('receipt', function (receipt: any) {
    //     console.log(receipt)
    //     console.log(2)
    //   })
    //   .on('confirmation', function (confirmationNumber: any, receipt: any) {
    //     console.log(receipt)
    //     console.log(3)
    //   })
    //   .on('error', function (error: any, receipt: any) {
    //     console.log(error)
    //     console.log(4)
    //   });

    // .then(function (receipt: any) {
    //   console.log(receipt)
    // });
  }
}
