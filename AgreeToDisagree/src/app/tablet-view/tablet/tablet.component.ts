import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Answer } from 'src/app/core/classes/Answer';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.scss']
})
export class TabletComponent implements OnInit {

  answerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.answerForm = this.fb.group({
      age: [1, [Validators.required]],
      profession: ['', [Validators.required]],
      stance: ['', [Validators.required]],
      position: ['', [Validators.required]]
    });
  }

  submitAnswers() {
    const answer = new Answer();
    answer.age = this.answerForm.get('age').value;
    answer.profession = this.answerForm.get('profession').value;
    answer.stance = this.answerForm.get('stance').value;
    answer.position = this.answerForm.get('position').value;

    this.firebaseService.uploadAnswer('7EqSAhlTFuWfhAK6NCa8', answer).then(() => {
      this.router.navigate(['/succes']);
    });
  }

  rangeChanged(value) {
    const rgb = 255 - ((255 / 100) * value.srcElement.value);
    document.body.style.backgroundColor =
      'rgb(' + rgb + ', ' + rgb + ', ' + rgb + ')';

    const rgbInvert = ((255 / 100) * value.srcElement.value);
    (document.querySelector('.title') as HTMLElement).style.color =
    'rgb(' + rgbInvert + ', ' + rgbInvert + ', ' + rgbInvert + ')';
  }
}
