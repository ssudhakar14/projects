import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'login', loadChildren: './login/login.module#LoginPageModule' },
	{ path: 'signUp', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
	{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
	{
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule {}
