import {Component, OnInit} from '@angular/core';
import Web3 from "web3";
import {WalletService} from "../service/wallet.service";
import {config} from "../../config/config";
import {contractAbi} from "../../abi/abi_light_year";
import {addWarning} from "@angular-devkit/build-angular/src/utils/webpack-diagnostics";

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss']
})
export class PageMainComponent implements OnInit {

  public addr: string = ""
  public registryAddr: string = ""
  public shipAddr: string = ""
  public heroAddr: string = ""
  public homeAddr: string = ""
  public battleAddr: string = ""
  public raresAddr: string = ""
  param: any
  public homeAddress: string = ""
  balance: any

  constructor(private walletService: WalletService) {

  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()
    this.registryAddr = config.addr_registry;
    this.shipAddr = await this.walletService.registryContract.methods.ship().call()
    this.heroAddr = await this.walletService.registryContract.methods.hero().call()
    this.homeAddr = await this.walletService.registryContract.methods.home().call()
    this.battleAddr = await this.walletService.registryContract.methods.battle().call()
    this.param = {from: this.addr}

    let balanceString = await this.walletService.getBalance();
    this.balance = (Number(balanceString) / 1000000000000000000)+" ETH"

  }

  setShip() {
    this.walletService.registryContract.methods.setShip(this.shipAddr).send(this.param)
  }

  setHero() {
    this.walletService.registryContract.methods.setHero(this.heroAddr).send(this.param)
  }

  setHome() {
    this.walletService.registryContract.methods.setHome(this.homeAddr).send(this.param)
  }

  setBattle() {
    this.walletService.registryContract.methods.setBattle(this.battleAddr).send(this.param)
  }

  async connectWallet() {
    this.walletService.window['ethereum'].request({method: 'eth_requestAccounts'}).then(() => {
      this.refresh()
    })
  }

  async switchToBsc() {
    await this.walletService.window['ethereum'].request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x61',
          chainName: 'BSC-test',
          nativeCurrency: {
            name: 'BNB',
            symbol: 'BNB',
            decimals: 18,
          },
          rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
          blockExplorerUrls: ['https://bscscan.com/'],
        },
      ],
    })
  }

  async switchToRinkeby() {
    await this.walletService.window['ethereum'].request({
      method: 'wallet_switchEthereumChain',
      params: [
        {
          chainId: '0x4', // A 0x-prefixed hexadecimal string
        }
      ]
    });
  }

  async test() {
    // let nftContract = new this.walletService.web3.eth.Contract(contractAbi.abi_sharpe_finance_cattle, config.addr_sharpe_finance_cattle);
    // let price = await nftContract.methods.TOKEN_PRICE().call();
    // console.log(price)
    //
    // nftContract.methods.mintNft().send({from:this.addr,value:61800000000000000})
    //
    // nftContract.events.Transfer({}, function (error: any, event: any) {
    //   console.log(error)
    //   console.log(event);
    // })
    alert("test")
  }

  setHomeAddress() {
    this.walletService.homeProxyContract.methods.setHome(this.homeAddress).send(this.param)
  }

  clearHomeData() {
    this.walletService.homeContract.methods.clearHomeData().send(this.param)
  }
}
