import { Injectable } from '@angular/core';
import { Matiere } from './matiere';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class MatiereService {

  private matieresUrl = 'http://localhost:8082/boot/rest/matiere';
  

  constructor(private http: HttpClient ) { }

  getMatieres(): Observable<Matiere[]> {

    return this.http.get<Matiere[]>(this.matieresUrl);
  }

  

  addMatiere (matiere: Matiere): Observable<Matiere> {
    return this.http.post<Matiere>(this.matieresUrl, matiere, httpOptions);
  }

  //on renvoi une matiere en particulier (celui qui à l'id : id)
getMatiere(id:number): Observable<Matiere> {
  const url2call = this.matieresUrl + '/' + id;
  return this.http.get<Matiere>(url2call) ;
  
}

/** DELETE: delete the matiere from the server */
deleteMatiere (matiere: Matiere | number): Observable<Matiere> {
  const id = typeof matiere === 'number' ? matiere : matiere.id;
  const url = `${this.matieresUrl}/${id}`;

  return this.http.delete<Matiere>(url, httpOptions);
  
}

/** PUT: update the matiere on the server */
updateMatiere (matiere: Matiere): Observable<any> {
  return this.http.put(this.matieresUrl, matiere, httpOptions);
 
}
  
}
