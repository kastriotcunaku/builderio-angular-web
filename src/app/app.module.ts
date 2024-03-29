import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageContentLayoutComponent } from './layouts/page-content-layout/page-layout.component';
import { HomeHeadlineArticleComponent } from './components/home-headline-article/home-headline-article.component';
import { MainContentComponent } from './layouts/main-content/main-content.component';
import { SuperLaunchComponent } from './components/super-launch/super-launch.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageContentLayoutComponent,
    HomeHeadlineArticleComponent,
    MainContentComponent,
    SuperLaunchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
