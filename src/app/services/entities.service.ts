import { Injectable, Output, EventEmitter, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Entities } from '../interface/entities'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

   

  constructor(private http: HttpClient) { }

  baseURL: string = "https://awovcw7p76.execute-api.us-east-1.amazonaws.com";
 
  public getEntities(entityId: number): Observable<Entities[]> {
    return this.http.get<Entities[]>(this.baseURL+'/dev/entity/v2.1/entities/'+entityId);
}
}
