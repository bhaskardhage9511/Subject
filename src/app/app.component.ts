import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'project';


  constructor(private service: HttpService) { }

  userName:string = "";
  
  ngOnInit() {
  }
 sendData(massage:string){
this.service.sendData(massage);

 }





}
