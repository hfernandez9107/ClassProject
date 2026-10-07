import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterLink, RouterOutlet, MatSidenavModule, NgIf],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isHandset = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(result => {
      this.isHandset = result.matches;
    });
  }

  toggleMenu() {
    this.sidenav.toggle();
  }
}