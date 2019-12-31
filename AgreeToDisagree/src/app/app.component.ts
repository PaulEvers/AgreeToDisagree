import { Component } from '@angular/core';
import { ModeService } from './core/services/mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public modeService: ModeService) {
  }
}
