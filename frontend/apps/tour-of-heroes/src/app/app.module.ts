import { BrowserModule }   from '@angular/platform-browser';
import { NgModule }        from '@angular/core';
import { FormsModule }     from '@angular/forms';

import { AppComponent }    from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
