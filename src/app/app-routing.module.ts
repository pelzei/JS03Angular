import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { StartinfoComponent } from './startinfo/startinfo.component';

const routes: Routes = [
  { path: '', component: StartinfoComponent },
  { path: 'cv', component: CvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
