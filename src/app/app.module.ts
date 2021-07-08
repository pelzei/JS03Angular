import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartinfoComponent } from './startinfo/startinfo.component';
import { CvComponent } from './cv/cv.component';
import { CvListComponent } from './cv/cv-list/cv-list.component';
import { CvItemComponent } from './cv/cv-item/cv-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartinfoComponent,
    CvComponent,
    CvListComponent,
    CvItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
