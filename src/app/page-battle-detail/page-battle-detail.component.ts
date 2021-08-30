import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-battle-detail',
  templateUrl: './page-battle-detail.component.html',
  styleUrls: ['./page-battle-detail.component.scss']
})
export class PageBattleDetailComponent implements OnInit {

  addr: string = ""
  battleString: any
  battleInfo: any = []
  index: number = 0

  constructor(private walletService: WalletService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let index = params['index'];
      if (index == undefined || index == -1) {
        index = 0
      }
      this.index = index
      this.refresh()
    });
  }

  async refresh() {
    this.addr = await this.walletService.getAddress();
    this.battleString = await this.walletService.homeContract.methods.battleHistoryMap(this.addr, this.index).call();
    this.battleInfo = this.bytesToInfo(this.battleString)
  }

  bytesToInfo(s: string) {

    //check
    if (s.startsWith("0x")) {
      s = s.substring(2, s.length);
    }
    if (s.length < 42) {
      return "";
    }

    //win
    let win = parseInt(s.substring(0, 2), 16);

    //attackerHealth
    let attackerHealth = s.substring(2, 22)
    let attackerHealthArray = this.healthStringToArray(attackerHealth)

    //defenderHealth
    let defenderHealth = s.substring(22, 42)
    let defenderHealthArray = this.healthStringToArray(defenderHealth)

    //battle
    let battleString = s.substring(42, s.length)
    let battleArray = this.battleStringToArray(battleString)

    let battleInfo = {
      win: win,
      attackerHealth: attackerHealthArray,
      defenderHealth: defenderHealthArray,
      battleArray: battleArray
    }

    //console.log(battleInfo)

    return battleInfo
  }

  healthStringToArray(s: string): number[] {
    let stringArray = this.stringToArray_4(s);
    let result = [];
    for (let i = 0; i < stringArray.length; i++) {
      result.push(parseInt(stringArray[i], 16))
    }
    return result
  }

  stringToArray_4(s: string) {
    let result = [];
    for (let i = 0, len = s.length; i < len; i += 4) {
      result.push(s.slice(i, i + 4));
    }
    return result
  }

  stringToArray_12(s: string) {
    let result = [];
    for (let i = 0, len = s.length; i < len; i += 12) {
      result.push(s.slice(i, i + 12));
    }
    return result
  }

  battleStringToArray(s: string) {
    let battleStrings = this.stringToArray_12(s);
    let battleArray = [];
    for (let i = 0; i < battleStrings.length; i++) {
      let str = battleStrings[i];
      let direction = parseInt(str.substring(0, 2), 16);
      let params = this.directionToParams(direction)
      let attributeIndex = parseInt(str.substring(2, 4), 16);
      let delta = parseInt(str.substring(4, 12), 16);
      battleArray.push({
        direction: direction,
        battleType: params.battleType,
        fromIndex: params.fromIndex,
        toIndex: params.toIndex,
        attributeIndex: attributeIndex,
        delta: delta
      })
    }
    return battleArray
  }

  directionToParams(z: number) {
    let a = z >> 6;
    let b = ((a << 6) ^ z) >> 3;
    let c = (a << 6 | b << 3) ^ z
    return {
      battleType: a,
      fromIndex: b,
      toIndex: c
    }
  }
}
