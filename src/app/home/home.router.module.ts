import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        children: [
            {
                path: 'about',
                component: AboutPage
            },
            {
                path: 'contact',
                component: ContactPage
            },
        ]
    }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
