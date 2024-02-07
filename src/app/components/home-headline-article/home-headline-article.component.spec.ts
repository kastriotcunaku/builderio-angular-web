import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeadlineArticleComponent } from './home-headline-article.component';

describe('HomeHeadlineArticleComponent', () => {
  let component: HomeHeadlineArticleComponent;
  let fixture: ComponentFixture<HomeHeadlineArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHeadlineArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeadlineArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
