import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
    selector: 'github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.css']
})
export class GithubComponent {
    user: any;
    repos: any;
    username: string;
    error: boolean;

    // al importar el servicio dentro del componente, podemos utilizar sus funiones
    // utilizo el contructor necesito que algo pase sin que se ejecute una función específica.
    constructor(private _githubService:GithubService) {
        // console.log('Github Componente Init...');

        // dentro del servicio github está la función obtener datos usuario.
        // dentro del constructor obtendo lo que me devuelve el sercicio
        // y lo almaceno como users
        // this._githubService.getUser().subscribe(users => {
        //     this.user = users;
        // });
    }

    search(){
        // Update username
        this._githubService.updateUser(this.username);
        //console.log(this.username);

        // Get username
        this._githubService.getUser().subscribe(
            users => {
                this.user = users;
            },
            error => {
                console.log(error);
                this.error = true;
            }
        );

        // Get repositories
        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
            console.log(repos);
        });
    }

}
