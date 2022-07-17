import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../services/api.service";

@Component({
  selector: 'app-related-articles',
  templateUrl: './related-articles.component.html',
  styleUrls: ['./related-articles.component.scss']
})
export class RelatedArticlesComponent implements OnInit {
 relatedArticle:{id:number,title:string,description:string,image:string}[]=[];
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getRelatedArticles()
  }
 getRelatedArticles(){
    this.api.getRelatedArticles().subscribe((resp)=>{
      resp.map(article=>{
        this.relatedArticle.push(article)
      })
    })
 }
}
