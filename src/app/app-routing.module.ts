import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Component/home/home.component";
import {ExposantComponent} from "./Component/Exposant/exposant/exposant.component";
import {NewExposantComponent} from "./Component/Exposant/new-exposant/new-exposant.component";
import {LivreComponent} from "./Component/Livre/livre/livre.component";
import {NewLivreComponent} from "./Component/Livre/new-livre/new-livre.component";
import {EditExposantComponent} from "./Component/Exposant/edit-exposant/edit-exposant.component";
import {EditLivreComponent} from "./Component/Livre/edit-livre/edit-livre.component";

const routes: Routes = [
  {path:"home",component : HomeComponent},
  {path:"",component : HomeComponent},
  {path:"exposants",component : ExposantComponent},
  {path:"newExposant",component : NewExposantComponent},
  {path:"editExposant/:exposantId",component : EditExposantComponent},

  {path:"livres",component : LivreComponent},
  {path:"newLivre",component : NewLivreComponent},
  {path:"editLivre/:livreId",component : EditLivreComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
