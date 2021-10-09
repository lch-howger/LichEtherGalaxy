import raresAbi from "./json/Rares.json"
import homeAbi from "./json/Home.json"
import shipAbi from "./json/Ship.json"
import heroAbi from "./json/Hero.json"
import battleAbi from "./json/Battle.json"
import registryAbi from "./json/Registry.json"
import testAbi from "./json/Test.json"
import homeProxyAbi from "./json/HomeProxy.json"
import resourceAbi from "./json/Resource.json"
import sharpeFinanceCattleAbi from "./json/SharpeFinanceCattle.json"

export const contractAbi = {
  "abi_ship": shipAbi,
  "abi_hero": heroAbi,
  "abi_home": homeAbi,
  "abi_battle": battleAbi,
  "abi_registry": registryAbi,
  "abi_rares": raresAbi,
  "abi_test": testAbi,
  "abi_home_proxy": homeProxyAbi,
  "abi_resource": resourceAbi,

  "abi_sharpe_finance_cattle": sharpeFinanceCattleAbi,
}
