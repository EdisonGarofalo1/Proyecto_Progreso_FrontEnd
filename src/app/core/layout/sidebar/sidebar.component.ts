import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  @Input() sidebarOpen: boolean = false;


  reportesMenuOpen: boolean = false;

  toggleReportesMenu() {
    this.reportesMenuOpen = !this.reportesMenuOpen;
  }

}
