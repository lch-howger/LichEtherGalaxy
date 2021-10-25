import {Component, OnInit} from '@angular/core';
import {WalletService} from "../service/wallet.service";

@Component({
  selector: 'app-tab-staking',
  templateUrl: './tab-staking.component.html',
  styleUrls: ['./tab-staking.component.scss']
})
export class TabStakingComponent implements OnInit {

  addr: any
  tokenList: any[] = []
  balanceList: any[] = []
  lockedList: any[] = []
  inputList: any[] = []

  constructor(private walletService: WalletService) {
    this.tokenList.push("LP token 01")
    this.tokenList.push("LP token 02")
  }

  ngOnInit(): void {
    this.refresh()
  }

  async refresh() {
    this.addr = await this.walletService.getAddress()
    let b01 = await this.walletService.lpToken01Contract.methods.balanceOf(this.addr).call()
    let b02 = await this.walletService.lpToken02Contract.methods.balanceOf(this.addr).call()
    this.balanceList=[]
    this.balanceList.push(b01)
    this.balanceList.push(b02)

    let l01 = await this.walletService.stakingContract.methods.userInfo(0, this.addr).call()
    let l02 = await this.walletService.stakingContract.methods.userInfo(1, this.addr).call()
    this.lockedList=[]
    this.lockedList.push(l01.amount)
    this.lockedList.push(l02.amount)
  }

  stake(index:number){
    let input=this.inputList[index]
    this.walletService.stakingContract.methods.deposit(index,input).send({from:this.addr}).then(()=>{
      this.refresh()
    })
  }
}
