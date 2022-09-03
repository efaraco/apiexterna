import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {path:"", pathMatch: 'full', redirectTo:"home"},
  {path: "home", component:UserListComponent},
  {path: "usuario/:idcontact", component:UserCardComponent},
  {path: "nuevo", component:UserFormComponent},
  {path: "actualizar/:idcontact", component:UserFormComponent},
  {path: "**", redirectTo: "home"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
