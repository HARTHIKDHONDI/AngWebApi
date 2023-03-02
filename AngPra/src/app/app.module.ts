import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurdAngComponent } from './curd-ang/curd-ang.component';
import { CreateCurdComponent } from './curd-ang/create-curd/create-curd.component';
import { CurdService } from 'src/Shared/curd.service';
import {Routes,RouterModule} from '@angular/router';
import{HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
const appRoutes: Routes = [
  {
    path:'',component:CurdAngComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    CurdAngComponent,
    CreateCurdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [CurdService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
