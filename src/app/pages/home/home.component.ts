import { Component, PLATFORM_ID,Inject,HostListener,ElementRef, ViewChild  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  windowWidth: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = (event.target as Window).innerWidth;  
    }
  }

  get isMobile() {
    return this.windowWidth < 768;
  }

}
