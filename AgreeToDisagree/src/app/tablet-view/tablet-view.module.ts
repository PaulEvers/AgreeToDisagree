import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabletComponent } from './tablet/tablet.component';



@NgModule({
  declarations: [TabletComponent],
  imports: [
    CommonModule
  ],
  exports: [TabletComponent]
})
export class TabletViewModule { }
