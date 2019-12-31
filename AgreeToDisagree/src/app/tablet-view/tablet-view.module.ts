import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabletComponent } from './tablet/tablet.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SuccesComponent } from './succes/succes.component';


@NgModule({
  declarations: [TabletComponent, SuccesComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [TabletComponent]
})
export class TabletViewModule { }
