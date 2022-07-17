import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { HeroComponentComponent } from './components/main-body/components/hero-component/hero-component.component';
import { BodyDescriptionComponent } from './components/main-body/components/body-description/body-description.component';
import { SubMenuComponent } from './components/main-body/components/sub-menu/sub-menu.component';
import { ContactCardComponent } from './components/main-body/components/contact-card/contact-card.component';
import { RelatedArticlesComponent } from './components/main-body/components/related-articles/related-articles.component';
import { ArticlesComponent } from './components/main-body/components/articles/articles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainBodyComponent,
    HeroComponentComponent,
    BodyDescriptionComponent,
    SubMenuComponent,
    ContactCardComponent,
    RelatedArticlesComponent,
    ArticlesComponent,
    MainNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
