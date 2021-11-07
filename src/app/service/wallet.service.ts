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

  //new
  public newShipContract: any
  public newFleetsContract: any
  public newHomeContract: any
  public newLightYearContract: any
  public newRegistryContract: any
  public newHomeProxyContract: any

  public nowDetailIndex: number = 0

  constructor() {
    this.window = window
    this.web3 = new this.window['Web3'](this.window['ethereum']);

    this.web3.eth.getAccounts().then((value: any) => {
    })

    //contract
    this.registryContract = new this.web3.eth.Contract(contractAbi.abi_registry, config.ADDR_REGISTRY);
    this.heroContract = new this.web3.eth.Contract(contractAbi.abi_hero, config.ADDR_HERO);
    this.shipContract = new this.web3.eth.Contract(contractAbi.abi_ship, config.ADDR_SHIP);
    this.homeContract = new this.web3.eth.Contract(contractAbi.abi_home, config.ADDR_HOME_PROXY);
    this.battleContract = new this.web3.eth.Contract(contractAbi.abi_battle, config.ADDR_BATTLE);
    this.homeProxyContract = new this.web3.eth.Contract(contractAbi.abi_home_proxy, config.ADDR_HOME_PROXY);

    //erc20
    this.resourceContract = new this.web3.eth.Contract(contractAbi.abi_resource, config.ADDR_RESOURCE);
    this.tokenUsdContract = new this.web3.eth.Contract(contractAbi.abi_resource, config.ADDR_TOKEN_USD);
    this.tokenIronContract = new this.web3.eth.Contract(contractAbi.abi_resource, config.ADDR_TOKEN_IRON);
    this.tokenCopperContract = new this.web3.eth.Contract(contractAbi.abi_resource, config.ADDR_TOKEN_CARBON);
    this.tokenSilverContract = new this.web3.eth.Contract(contractAbi.abi_resource, config.ADDR_TOKEN_SILICON);
    this.tokenGoldContract = new this.web3.eth.Contract(contractAbi.abi_resource, config.ADDR_TOKEN_GOLD);

    //staking
    this.stakingContract = new this.web3.eth.Contract(contractAbi.abi_staking, config.ADDR_STAKING)
    this.lpToken01Contract = new this.web3.eth.Contract(contractAbi.abi_resource, config.ADDR_LP_TOKEN01)
    this.lpToken02Contract = new this.web3.eth.Contract(contractAbi.abi_resource, config.ADDR_LP_TOKEN02)

    //new
    this.newShipContract = new this.web3.eth.Contract(contractAbi.abi_new_ship, config.ADDR_NEW_SHIP)
    this.newFleetsContract = new this.web3.eth.Contract(contractAbi.abi_new_fleets, config.ADDR_NEW_FLEETS_PROXY)
    this.newHomeContract = new this.web3.eth.Contract(contractAbi.abi_new_home, config.ADDR_NEW_HOME_PROXY)
    this.newLightYearContract = new this.web3.eth.Contract(contractAbi.abi_new_light_year, config.ADDR_NEW_LIGHT_YEAR)
    this.newRegistryContract = new this.web3.eth.Contract(contractAbi.abi_new_registry, config.ADDR_NEW_REGISTRY)
    this.newHomeProxyContract = new this.web3.eth.Contract(contractAbi.abi_new_home_proxy, config.ADDR_NEW_HOME_PROXY)

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
