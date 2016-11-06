import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { GithubService } from './services/github.service';

import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { BindingComponent } from './components/binding/binding.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    BindingComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
