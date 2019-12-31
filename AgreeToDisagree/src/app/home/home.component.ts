import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit() {

  }

  selectMode(mode: string) {
    switch (mode) {
      case 'input':
        this.router.navigate(['/input']);
        break;
      case 'tabletView':
        this.router.navigate(['/tablet']);
        break;
      case 'klankbord':
        this.router.navigate(['/klankbord']);
        break;
      default:
        break;
    }
  }
}
