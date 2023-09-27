import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './home/map/map.component';
import { TemporaryAdoptationComponent } from './temporary-adoptation/temporary-adoptation.component';
import { SearchDogComponent } from './search-dog/search-dog.component';
import { FoundDogComponent } from './found-dog/found-dog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    TemporaryAdoptationComponent,
    SearchDogComponent,
    FoundDogComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
