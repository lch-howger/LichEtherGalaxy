import raresAbi from "./json/Rares.json"
import homeAbi from "./json/Home.json"
import shipAbi from "./json/Ship.json"
import heroAbi from "./json/Hero.json"
import battleAbi from "./json/Battle.json"
import registryAbi from "./json/Registry.json"
import testAbi from "./json/Test.json"
import homeProxyAbi from "./json/HomeProxy.json"
import resourceAbi from "./json/Resource.json"
import StakingAbi from "./json/Staking.json"

//new
import newShipAbi from "./json/NewShip.json"
import newFleetsAbi from "./json/NewFleets.json"
import newHomeAbi from "./json/NewHome.json"
import newLightYearAbi from "./json/NewLightYear.json"
import newRegistryAbi from "./json/NewRegistry.json"
import newHomeProxyAbi from "./json/NewHomeProxy.json"

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
  "abi_staking": StakingAbi,

  //new
  "abi_new_ship": newShipAbi,
  "abi_new_fleets": newFleetsAbi,
  "abi_new_home": newHomeAbi,
  "abi_new_light_year": newLightYearAbi,
  "abi_new_registry": newRegistryAbi,
  "abi_new_home_proxy": newHomeProxyAbi,
}
