import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputQuestionComponent } from './input-question/input-question.component';



@NgModule({
  declarations: [InputQuestionComponent],
  imports: [
    CommonModule
  ],
  exports: [InputQuestionComponent]
})
export class InputQuestionViewModule { }
