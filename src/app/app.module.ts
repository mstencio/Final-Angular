import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GifsComponent } from './gifs/gifs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StickersComponent } from './stickers/stickers.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GifsComponent,
    NavbarComponent,
    StickersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
