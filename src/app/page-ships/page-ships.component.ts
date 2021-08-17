import {Component, OnInit} from '@angular/core';
import web3 from 'web3';

@Component({
  selector: 'app-page-ships',
  templateUrl: './page-ships.component.html',
  styleUrls: ['./page-ships.component.scss']
})
export class PageShipsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  mintShip() {
    alert("a")
  }
}
