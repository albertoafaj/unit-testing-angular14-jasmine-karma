import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatchersJasmineComponent } from './matchers-jasmine/matchers-jasmine.component';
import { StubComponent } from './stub/stub.component';
import { HomeComponent } from './home/home.component';
import { SpyonComponent } from './spyon/spyon.component';
import { SpyOnPropertyComponent } from './spy-on-property/spy-on-property.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchersJasmineComponent,
    StubComponent,
    HomeComponent,
    SpyonComponent,
    SpyOnPropertyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
