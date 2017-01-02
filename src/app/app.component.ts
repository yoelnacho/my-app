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
            "angular": {
                title: 'Angular2',
                url: 'https://angular.io/docs/ts/latest/',
                logo: 'https://angular.io/resources/images/logos/angular2/angular.svg'
                // logo: 'assets/angular2.png'
            },
            "bootstrap": {
                title: 'Bootstrap4',
                url: 'https://ng-bootstrap.github.io/',
                logo: 'https://ng-bootstrap.github.io/img/logo.svg'
            }
        }
    }
}
