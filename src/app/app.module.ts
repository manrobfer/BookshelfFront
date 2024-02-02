import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { AuthorComponent } from './author/author.component';
import { PressComponent } from './Press/press.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CategoryDetail } from './category/CategoryDetails/categorydetail.component';
import { LoggingService } from './Services/Logging.service';
import { AuthorDetail } from './author/AuthorDetaills/author-detail.component';
import { AppRouterComponent } from './app-route-component';
import { PressDetailsComponent } from './Press/press-details/press-details.component';
import { SidebarComponent } from './side-bar/sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    AuthorComponent,
    AuthorDetail,
    PressComponent,
    PressDetailsComponent,
    DashboardComponent,   
    CategoryDetail,
    SidebarComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouterComponent
    ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
