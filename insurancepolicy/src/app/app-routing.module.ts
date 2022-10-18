import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ViewComponent } from './components/view/view.component';



const routes: Routes = [
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'view', component: ViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
