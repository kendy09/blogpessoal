import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';



const routes: Routes =
[
  {path:"",redirectTo:"login", pathMatch:"full"},
  {path:"login",component: LoginComponent},
  {path:"cadastrar",component: CadastrarComponent},
  {path:"inicio",component:InicioComponent},
  {path:"tema",component:TemaComponent},
  {path:  "tema-edit/:id",component:TemaEditComponent},
  {path:  "tema-delete/:id",component:TemaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
