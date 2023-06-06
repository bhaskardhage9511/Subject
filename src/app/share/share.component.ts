import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit{



  massage:string = ""
@Input()parent = "";
  constructor(private service:HttpService) { }

  ngOnInit() {
  this.service.reciveData().subscribe((data)=>{
    this.massage = data;
  })
   
  }



}
