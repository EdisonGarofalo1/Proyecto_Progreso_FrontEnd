import { Component,HostListener  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebMultiBranchPro';

  isSidebarClosed = false;
  isSearchFormVisible = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 768) {
      this.isSidebarClosed = true;
    } else {
      this.isSidebarClosed = false;
    }

    if (event.target.innerWidth > 576) {
      this.isSearchFormVisible = false;
    }
  }
}
