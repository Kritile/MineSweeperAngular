import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import {FormsModule} from '@angular/forms';
import { GenerateFieldFormComponent } from './generate-field-form/generate-field-form.component';
import { CollDirective } from './coll.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    GenerateFieldFormComponent,
    CollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
