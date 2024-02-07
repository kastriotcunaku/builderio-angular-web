import { Component } from '@angular/core';

@Component({
  selector: 'app-home-headline-article',
  templateUrl: './home-headline-article.component.html',
  styleUrls: ['./home-headline-article.component.scss']
})
export class HomeHeadlineArticleComponent {
  isOpen: boolean = false;

  close() {
    this.isOpen = false;
  }
}
