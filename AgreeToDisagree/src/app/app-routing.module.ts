import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputQuestionComponent } from './input-question-view/input-question/input-question.component';
import { KlankbordComponent } from './klankbord-view/klankbord/klankbord.component';
import { TabletComponent } from './tablet-view/tablet/tablet.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'input',
    component: InputQuestionComponent,
  },
  {
    path: 'klankbord',
    component: KlankbordComponent,
  },
  {
    path: 'tablet',
    component: TabletComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
