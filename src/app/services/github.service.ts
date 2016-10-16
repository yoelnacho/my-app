import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    // usuario, id y clave generados desde github
    private username = 'yoelnacho';
    private client_id = '826727ccde1d05b4032c';
    private client_secret = '88fe00e871058d33de888e6afe53bafd00249fc9';

    constructor(private _http:Http) {
        console.log('Github Service Init...');
    }

}
