import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Proposition } from 'src/app/core/classes/Proposition';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.scss']
})
export class InputQuestionComponent implements OnInit {

  questionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.questionForm = this.fb.group({
      proposition: ['', [Validators.required]],
      extra: ['', [Validators.required]],
      agreed: [false, [Validators.requiredTrue]]
    });
  }

  submitQuestion() {
    const proposition = new Proposition();
    proposition.added = Math.round((new Date()).getTime() / 1000);
    proposition.proposition = this.questionForm.get('proposition').value;
    proposition.extraInfo = this.questionForm.get('extra').value;


    this.firebaseService.uploadProposition(proposition).then(() => {
      alert('Stelling geplaatst!')
      this.router.navigate(['/']);
    });

  }
}
