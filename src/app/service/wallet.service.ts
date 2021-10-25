import {Injectable} from '@angular/core';
import Web3 from "web3";
import {contractAbi} from "../../abi/abi_light_year";
import {config} from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  public web3: any
  public window: any
  public registryContract: any
  public heroContract: any
  public shipContract: any
  public homeContract: any
  public battleContract: any
  public testContract: any
  public homeProxyContract: any

  public resourceContract: any
  public tokenUsdContract: any
  public tokenIronContract: any
  public tokenCopperContract: any
  public tokenSilverContract: any
  public tokenGoldContract: any

  public stakingContract: any
  public lpToken01Contract: any
  public lpToken02Contract: any

  public nowDetailIndex: number = 0

  constructor() {
    this.window = window
    this.web3 = new this.window['Web3'](this.window['ethereum']);

    this.web3.eth.getAccounts().then((value: any) => {
    })

    //contract
    this.registryContract = new this.web3.eth.Contract(contractAbi.abi_registry, config.addr_registry);
    this.heroContract = new this.web3.eth.Contract(contractAbi.abi_hero, config.addr_hero);
    this.shipContract = new this.web3.eth.Contract(contractAbi.abi_ship, config.addr_ship);
    this.homeContract = new this.web3.eth.Contract(contractAbi.abi_home, config.addr_home_proxy);
    this.battleContract = new this.web3.eth.Contract(contractAbi.abi_battle, config.addr_battle);
    this.testContract = new this.web3.eth.Contract(contractAbi.abi_test, config.addr_test);
    this.homeProxyContract = new this.web3.eth.Contract(contractAbi.abi_home_proxy, config.addr_home_proxy);

    //erc20
    this.resourceContract = new this.web3.eth.Contract(contractAbi.abi_resource, config.addr_resource);
    this.tokenUsdContract = new this.web3.eth.Contract(contractAbi.abi_resource, config.addr_token_usd);
    this.tokenIronContract = new this.web3.eth.Contract(contractAbi.abi_resource, config.addr_token_iron);
    this.tokenCopperContract = new this.web3.eth.Contract(contractAbi.abi_resource, config.addr_token_copper);
    this.tokenSilverContract = new this.web3.eth.Contract(contractAbi.abi_resource, config.addr_token_silver);
    this.tokenGoldContract = new this.web3.eth.Contract(contractAbi.abi_resource, config.addr_token_gold);

    //staking
    this.stakingContract = new this.web3.eth.Contract(contractAbi.abi_staking, config.add_staking)
    this.lpToken01Contract = new this.web3.eth.Contract(contractAbi.abi_resource, config.addr_lp_token01)
    this.lpToken02Contract = new this.web3.eth.Contract(contractAbi.abi_resource, config.addr_lp_token02)

    this.shipContract.events.Transfer({}, function (error: any, event: any) {
      console.log(error)
      console.log(event);
    })

    this.homeContract.events.AdventureResult({}, function (error: any, event: any) {
      handleAdventureResult(event.returnValues)
    })

    function handleAdventureResult(value: any) {
      let result = parseInt(value.result);
      let amount = parseInt(value.amount);
      if (result == 0) {
        alert("成功探索到了资源：" + amount)
      } else if (result == 1) {
        if (amount == 0) {
          alert("意外遭遇了海盗，战斗失败，获得资源：0");
        } else {
          alert("意外遭遇了海盗，战斗胜利，获得资源：" + amount);
        }
      } else {
        alert("成功探索发现小行星，小行星上存在大量资源！！！资源：" + amount)
      }
    }
  }

  async getAddress(): Promise<string> {
    let addrs = await this.web3.eth.getAccounts();
    return addrs[0]
  }

  async getBalance(): Promise<string> {
    let addr = await this.getAddress();
    let balance = await this.web3.eth.getBalance(addr);
    return balance
  }

  connectWallet() {
    this.window['ethereum'].enable()
  }

}
