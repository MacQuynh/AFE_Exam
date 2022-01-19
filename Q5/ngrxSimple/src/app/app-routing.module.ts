import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ StoreModule} from '@ngrx/store'; 
import {simpleReducer} from './simple.reducer';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
