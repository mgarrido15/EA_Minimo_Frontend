import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CreateCategoryComponent } from './components/category/category.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ViewCategoryComponent } from './components/view-category/view-category.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'edit/:id', component: EditUserComponent },
  {path: 'profile/:id', component: ProfileComponent},
  { path: 'home', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'createuser', component: CreateUserComponent },
  {path: 'create-category', component: CreateCategoryComponent},
  {path: 'view-category/:id', component: ViewCategoryComponent}
  // Altres rutes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }