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
        // console.log('Github Componente Init...');

        // dentro del servicio github está la función obtener datos usuario.
        // dentro del constructor obtendo lo que me devuelve el sercicio
        // y lo almaceno como users
        this._githubService.getUser().subscribe(users => {
            console.log(users);
        });
    }

}
