import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { BindingComponent } from './components/binding/binding.component';

export const router: Routes = [
    { path: '', redirectTo: 'github', pathMatch: 'full'},
    { path: 'github', component: GithubComponent },
    { path: 'examples', component: BindingComponent },
    { path: 'examples:id', component: BindingComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
