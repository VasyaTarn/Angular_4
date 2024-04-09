import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './site/contact/contact.component';
import { FeaturesComponent } from './site/features/features.component';
import { HomeComponent } from './site/home/home.component';
import { PetsComponent } from './site/pets/pets.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FeaturesComponent,
    HomeComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
