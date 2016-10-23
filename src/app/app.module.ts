import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GithubService } from './services/github.service';

import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { BindingComponent } from './components/binding/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
