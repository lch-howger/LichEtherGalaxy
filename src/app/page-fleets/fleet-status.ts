export enum FleetStatus {
  Home, Guard, BattleGo, Damaged, Explore, ExploreGo, Back
}

export function getFleetStatusString(key: any) {
  let num: number = +key;
  switch (num) {
    case FleetStatus.Home:
      return "正在基地"
    case FleetStatus.Guard:
      return "正在守卫基地"
    case FleetStatus.BattleGo:
      return "出发战斗"
    case FleetStatus.Damaged:
      return "舰队损坏"
    case FleetStatus.Explore:
      return "正在探索"
    case FleetStatus.ExploreGo:
      return "出发探索"
    case FleetStatus.Back:
      return "回家中"
  }
  return ""
}
