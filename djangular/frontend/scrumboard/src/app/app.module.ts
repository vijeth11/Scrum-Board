import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScrumboardComponent } from './scrumboard/scrumboard.component';
import {MatButtonModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { AddcardComponent } from './addcard/addcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScrumboardComponent,
    AddcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    HttpModule,
    HttpClientModule,
    MatDialogModule,
  ],
  entryComponents: [ AddcardComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
