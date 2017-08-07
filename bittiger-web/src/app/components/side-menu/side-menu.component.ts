import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  private _opened: boolean = true;
  private _mode: string = 'push';
  constructor() { }

  ngOnInit() {
  }

  // openSideMenu() {
  //   document.getElementById('side-menu').style.width = '250px';
  // }

  // closeSideMenu() {
  //   document.getElementById('side-menu').style.width = '0px';
  // }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

}
