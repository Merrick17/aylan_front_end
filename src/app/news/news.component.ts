import { Component, OnInit } from '@angular/core'
import { NewsService } from '../news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  news = []
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((data) => {
      let result: any = data
      this.news = result.news
      console.log(data)
    })
  }
}
