import { Injectable } from '@angular/core';
import { Formateur } from './formateur';

// import { CONTACTS } from './mock-contacts';

import { HttpClient, HttpHeaders }    from '@angular/common/http';

import { Observable, of } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http: HttpClient) { }


private apiUrl="http://localhost:8081/boot/rest/formateur";
//url to web apli




//on renvoi un contact ss forme d'observable, get formateurs from the server
getFormateurs(): Observable<Formateur[]> {
  return this.http.get<Formateur[]>(this.apiUrl) ;
  
}

/** POST: add a new formateur to the server */
// addFormateur (formateur: Formateur): Observable<Formateur> {
//   return this.http.post<Formateur>(this.apiUrl, formateur, httpOptions).pipe(
//     tap((newFormateur: Formateur) => this.log(`added formateur w/ id=${newFormateur.id}`)),
//     catchError(this.handleError<Formateur>('addFormateur'))
//   );
// }

/** DELETE: delete the formateur from the server */
deleteFormateur (formateur: Formateur | number): Observable<Formateur> {
  const id = typeof formateur === 'number' ? formateur : formateur.id;
  const url = `${this.apiUrl}/${id}`;

  return this.http.delete<Formateur>(url, httpOptions);
  
}

/** PUT: update the formateur on the server */
updateFormateur (formateur: Formateur): Observable<any> {
  return this.http.put(this.apiUrl, formateur, httpOptions);
 
}
}
