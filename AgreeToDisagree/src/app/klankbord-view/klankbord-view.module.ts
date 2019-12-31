import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KlankbordComponent } from './klankbord/klankbord.component';



@NgModule({
  declarations: [KlankbordComponent],
  imports: [
    CommonModule
  ],
  exports: [KlankbordComponent]
})
export class KlankbordViewModule { }
