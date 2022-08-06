import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class RenderService implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor( private _httpClient: HttpClient ){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        throw new Error('Method not implemented.');
    }

    public summarization(comentario: any): any{
        // console.log("ADD COMENTARIO => ", comentario);
        console.log("=========> ", comentario);
        return new Promise((resolve, reject) => {
            this._httpClient.post<any>(`${environment.url}/summarization`,comentario)
                .subscribe((response: any) => {
                    console.log("=========> ", response);
                    resolve(response);
                }, reject);
            }
        );
    }

    public getHeader() {
        return new HttpHeaders().set('accept', 'application/json').set('Content-Type', 'application/json');
    }

}
