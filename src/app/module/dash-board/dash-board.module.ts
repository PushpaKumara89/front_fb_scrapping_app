import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import {MatDividerModule} from "@angular/material/divider";
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './component/search/search.component';
import { ImagePalletComponent } from './component/image-pallet/image-pallet.component';
import { PostComponent } from './component/image-pallet/post/post.component';


@NgModule({
  declarations: [
    DashBoardComponent,
    TopBarComponent,
    SearchComponent,
    ImagePalletComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    MatDividerModule,
    FormsModule
  ]
})
export class DashBoardModule { }
