export enum FleetStatus {
  Home, Guard, Battle, BattleGo, BattleBack, Explore, ExploreGo, ExploreBack
}

export function getFleetStatusString(key: any) {
  let num: number = +key;
  switch (num) {
    case FleetStatus.Home:
      return "正在基地"
    case FleetStatus.Guard:
      return "正在守卫基地"
    case FleetStatus.Battle:
      return "正在战斗"
    case FleetStatus.BattleGo:
      return "出发战斗"
    case FleetStatus.BattleBack:
      return "战斗返回"
    case FleetStatus.Explore:
      return "正在探索"
    case FleetStatus.ExploreGo:
      return "出发探索"
    case FleetStatus.ExploreBack:
      return "探索返回"
  }
  return ""
}
