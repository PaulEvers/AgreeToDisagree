import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { Proposition } from 'src/app/core/classes/Proposition';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  prop: Proposition = null;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getProp();
  }

  private async getProp() {
    this.prop = await this.firebaseService.getLatestProp() as Proposition;
  }

}
