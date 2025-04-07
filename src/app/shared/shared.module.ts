import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { NavmenuComponent } from './layout/navmenu/navmenu.component';


@NgModule({
  declarations: [
    NavmenuComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNGModule,
    
  ],
  exports: [
    NavmenuComponent,
  ]
})
export class SharedModule { }
