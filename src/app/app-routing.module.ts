import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'login', loadChildren: './login/login.module#LoginPageModule' },
	{ path: '', loadChildren: './home/home.module#HomePageModule' }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule {}
