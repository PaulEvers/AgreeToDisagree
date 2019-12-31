import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Answer } from 'src/app/core/classes/Answer';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.scss']
})
export class TabletComponent implements OnInit {

  answerForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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

    console.log(answer);
  }
}
