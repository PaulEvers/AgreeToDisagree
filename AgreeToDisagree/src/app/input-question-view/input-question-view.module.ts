import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputQuestionComponent } from './input-question/input-question.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [InputQuestionComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [InputQuestionComponent]
})
export class InputQuestionViewModule { }
