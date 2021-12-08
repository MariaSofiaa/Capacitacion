import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/componentes/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { sofcodeComponent } from './pages/sofcode/sofcode.components';
import { HttpClientModule} from '@angular/common/http';
import { CartComponent } from './shared/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    sofcodeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MaterialModule,
    FormsModule, BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
