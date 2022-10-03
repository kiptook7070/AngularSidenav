import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { sidenavBarData } from './sidenav-data';

interface SideNavToggle{
  screenwidth: number;
  collapsed: boolean;
  
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  collapsed: boolean = true;
  sidenavData = sidenavBarData;
  screenwidth = 0;

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.onToggleSideNav.emit()
    
  }
  toggleCollapsed() {
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit()

    
  }
  closeSidenav() {
    this.collapsed = false;
    this.onToggleSideNav.emit()

    
  }

}
