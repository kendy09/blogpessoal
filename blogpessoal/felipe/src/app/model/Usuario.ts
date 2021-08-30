import{Postagem}from"./Postagem"
export class Usuario{
    public id: number;
    public nome: string;
    public senha: string;
    public dataNascimento: Date;
    public usuario: string;
    public postagem: Postagem[];
    public tipo: string;
    public foto: string;

}