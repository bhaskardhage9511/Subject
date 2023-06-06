import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private subject = new Subject<string>()
  
  constructor() { }
 

  sendData(massage:string){
   this.subject.next(massage);
  }
 
  reciveData(): Observable<string>{
  return this.subject.asObservable();
  }
 


}
