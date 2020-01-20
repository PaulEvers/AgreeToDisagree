import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { Observable, interval } from 'rxjs';
import { Proposition } from 'src/app/core/classes/Proposition';
import { Answer } from 'src/app/core/classes/Answer';

@Component({
  selector: 'app-klankbord',
  templateUrl: './klankbord.component.html',
  styleUrls: ['./klankbord.component.scss']
})
export class KlankbordComponent implements OnInit {

  prop$: Observable<Proposition>;
  private answers: Answer[];

  professions = new Array(9);
  ages = new Array(48);

  private scrollingInterval$ = interval(60000);
  scrollingTexts = new Array(3);

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.setProp$();
    this.setAnswers();
    this.scrollingInterval$.subscribe(() => this.setTexts(this.answers));
  }

  private async setProp$() {
    this.prop$ = await this.firebaseService.getLatestPropAsObservable();
  }

  private async setAnswers() {
    await (await this.firebaseService.getLatestPropAsObservable()).subscribe(prop => {
      const answers = this.shuffle(prop.answers);
      this.answers = answers;
      this.setProfessions(answers);
      this.setAges(answers);
      this.setTexts(answers);
    });
  }

  private shuffle(a) {
    let j;
    let x;
    let i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  private setProfessions(answers: Answer[]) {
    this.professions = new Array(9);
    let i = 0;
    answers.forEach(answer => {
      this.professions[i] = answer.profession;
      i++;
    });
    this.professions = this.shuffle(this.professions);

  }

  private setAges(answers: Answer[]) {
    this.ages = new Array(48);
    let i = 0;
    answers.forEach(answer => {
      this.ages[i] = answer.age;
      i++;
    });

    this.ages = this.shuffle(this.ages);
  }

  private setTexts(answers: Answer[]) {
    if (!answers || answers.length === 0) { return; }

    for (let i = 0; i < this.scrollingTexts.length; i++) {
      const randomIndex = Math.floor(Math.random() * answers.length);
      this.scrollingTexts[i] = '"' + answers[randomIndex].position + '"';
    }

  }

}
