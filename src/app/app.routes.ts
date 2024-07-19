import { Routes } from '@angular/router';
import { FirstPageComponent } from './view/first-page/first-page.component';
import { SecondPageComponent } from './view/second-page/second-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/first_page', pathMatch: 'full' },
    { path: 'first_page', component: FirstPageComponent },
    { path: 'second_page', component: SecondPageComponent },
    { path: '**', redirectTo: '/second_page', pathMatch: 'full' } // This is the path of 404 page change it if you want to keep it
];
