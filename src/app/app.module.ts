import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Material Modules
import {MatIconModule,
        MatToolbarModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatProgressSpinnerModule} from '@angular/material';

import {AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import {EnterNonEmptyCredsComponent, PathFormComponent} from './path-form/path-form.component';
import { LoginCredsDialogComponent } from './login-creds-dialog/login-creds-dialog.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PathFormComponent,
    LoginCredsDialogComponent,
    EnterNonEmptyCredsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  entryComponents:[LoginCredsDialogComponent, EnterNonEmptyCredsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
