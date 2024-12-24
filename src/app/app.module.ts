import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule,provideHttpClient, withFetch } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {InterceptorService} from './core/interceptors/interceptor.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  
  ],
  providers: [
    provideClientHydration(), 
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    // { provide: ErrorHandler, useClass: GlobalErrorHandler },
    provideHttpClient(withFetch()) 
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
