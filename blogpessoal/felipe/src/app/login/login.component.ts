import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';
import {UsuarioLogin}from './../model/UsuarioLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioLogin : UsuarioLogin = new UsuarioLogin();
  
  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

  logar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{

      this.usuarioLogin=resp;
      this.usuarioLogin.foto;
      
      environment.token =this.usuarioLogin.token;
      environment.nome = this.usuarioLogin.nome;
      environment.foto = this.usuarioLogin.foto;
      environment.id = this.usuarioLogin.id;

      console.log(environment.token);
      console.log(environment.nome);
      console.log(environment.foto);
      console.log(environment.id);
      
      this.router.navigate(['/inicio'])
    },erro=>{
      if (erro.status==401){
        alert("Usuario ou senha estão incorretas")
      }
    }
      
    )
  }
}
