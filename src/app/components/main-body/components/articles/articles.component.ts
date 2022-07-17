import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../services/api.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
   articleArray:{id:number,title:string,description:string,image:string}[]=[];
  constructor( private api:ApiService) { }

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles(){
    this.api.getArticles().subscribe((resp)=>{
      resp.map(article=>{
        this.articleArray.push(article)
      })
    })
  }

}
