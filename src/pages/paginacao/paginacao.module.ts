import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginacaoPage } from './paginacao';

@NgModule({
  declarations: [
    PaginacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginacaoPage),
  ],
})
export class PaginacaoPageModule {}
