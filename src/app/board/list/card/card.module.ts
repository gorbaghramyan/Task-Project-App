import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardComponent } from './card.component';


@NgModule({
  declarations: [    
    CardComponent,
    CardDetailComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports:[
    CardComponent, 
    CardDetailComponent]
})
export class CardModule { }
