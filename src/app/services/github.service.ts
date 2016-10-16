import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    // usuario, id y clave generados desde github
    private username = 'yoelnacho';
    private client_id = '7909a3a30dadb3f82462';
    private client_secret = '1da2869c4efe3509c85048eb103dc3e3025ffeb5';

    constructor(private _http:Http) {
        console.log('Github Service Init...');
    }

    // Datos de un usuario en github https://api.github.com/users/
    // con esta función obtengo un observable.
    getUser(){
        // la variable username es la que está definida arriba.
        return this._http.get('https://api.github.com/users/'+this.username)
            .map(res => res.json());
    }

    getRepos(){
        // la variable username es la que está definida arriba.
        return this._http.get('https://api.github.com/users/'+this.username+'/repos')
            .map(res => res.json());
    }

    // Actualizo el username
    updateUser(username:string){
        this.username = username;
    }

}
