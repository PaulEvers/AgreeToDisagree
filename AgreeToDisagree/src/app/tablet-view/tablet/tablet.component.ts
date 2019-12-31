import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  }
}
