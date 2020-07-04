import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { BicycleDetailsComponent } from './bicycle-details/bicycle-details.component';
import { BicycleDetailComponent } from './bicycle-details/bicycle-detail/bicycle-detail.component';
import { SidebarComponent } from './bicycle-details/app-sidebar/sidebar';
import { BicycleDetailListComponent } from './bicycle-details/bicycle-detail-list/bicycle-detail-list.component';
import { BicycleDetailService } from './shared/bicycle-detail.service';

@NgModule({

  
  declarations: [
    AppComponent,
    BicycleDetailsComponent,
    SidebarComponent,
    BicycleDetailComponent,
    BicycleDetailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [BicycleDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
