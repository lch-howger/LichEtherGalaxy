export enum FleetStatus {
  Home, Guard, BattleGo, Damaged, Explore, ExploreGo, Back,Market
}

export function getFleetStatusString(key: any) {
  let num: number = +key;
  switch (num) {
    case FleetStatus.Home:
      return num+"-正在基地"
    case FleetStatus.Guard:
      return num+"-正在守卫基地"
    case FleetStatus.BattleGo:
      return num+"-出发战斗"
    case FleetStatus.Damaged:
      return num+"-舰队损坏"
    case FleetStatus.Explore:
      return num+"-正在探索"
    case FleetStatus.ExploreGo:
      return num+"-出发探索"
    case FleetStatus.Back:
      return num+"-回家中"
    case FleetStatus.Market:
      return num+"-宇宙交易所"
  }
  return ""
}
