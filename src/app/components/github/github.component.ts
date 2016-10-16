import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
    selector: 'github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.css']
})
export class GithubComponent {

    // al importar el servicio dentro del componente, podemos utilizar sus funiones
    constructor(private _githubService:GithubService) {
      console.log('Github Componente Init...');
    }

}
