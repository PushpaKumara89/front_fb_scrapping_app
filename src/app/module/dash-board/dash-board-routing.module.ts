import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';
import {ImagePalletComponent} from "./component/image-pallet/image-pallet.component";

const routes: Routes = [{ path: '', component: DashBoardComponent, children: [
    { path: 'image_pallet', component: ImagePalletComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
