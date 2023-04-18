import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatchersJasmineComponent } from './matchers-jasmine/matchers-jasmine.component';
import { StubComponent } from './stub/stub.component';
import { HomeComponent } from './home/home.component';
import { SpyonComponent } from './spyon/spyon.component';
import { SpyOnPropertyComponent } from './spy-on-property/spy-on-property.component';
import { RequestComponent } from './request/request.component';
import { AsynchronousComponentComponent } from './asynchronous-component/asynchronous-component.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';
import { FixtureDetectChangeComponent } from './fixture-detect-change/fixture-detect-change.component';
import { AutoDetectChangeComponent } from './auto-detect-change/auto-detect-change.component';
import { HandleEventComponent } from './handle-event/handle-event.component';
import { FillFormComponent } from './fill-form/fill-form.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { HttpPipe } from './http.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MatchersJasmineComponent,
    StubComponent,
    HomeComponent,
    SpyonComponent,
    SpyOnPropertyComponent,
    RequestComponent,
    AsynchronousComponentComponent,
    TestingComponentComponent,
    FixtureDetectChangeComponent,
    AutoDetectChangeComponent,
    HandleEventComponent,
    FillFormComponent,
    InputOutputComponent,
    HttpPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
