import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabletComponent } from './tablet/tablet.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccesComponent } from './succes/succes.component';
import { RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';


@NgModule({
  declarations: [TabletComponent, SuccesComponent, QuestionComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [TabletComponent]
})
export class TabletViewModule { }
