import raresAbi from "./json/Rares.json"
import homeAbi from "./json/Home.json"
import shipAbi from "./json/Ship.json"
import heroAbi from "./json/Hero.json"
import battleAbi from "./json/Battle.json"
import registryAbi from "./json/Registry.json"

export const contractAbi = {
  "abi_ship": shipAbi,
  "abi_hero": heroAbi,
  "abi_home": homeAbi,
  "abi_battle": battleAbi,
  "abi_registry": registryAbi,
  "abi_rares": raresAbi
}
