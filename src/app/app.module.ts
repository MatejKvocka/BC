import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { CoinDialogComponent } from './coin-dialog/coin-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CoinListComponent,
    NavigationComponent,
    CoinDialogComponent,
    CoinDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
