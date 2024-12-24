import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  sidebarOpen :boolean = true;
  constructor(private cdr: ChangeDetectorRef) {}
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen; 
    this.cdr.detectChanges();
  }
}
