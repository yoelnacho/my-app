import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    brand:any;

    constructor(){
        this.brand = {
            title: 'Angular2',
            url: 'https://angular.io/docs/ts/latest/',
            logo: 'assets/angular2.png'
        }
    }
}
