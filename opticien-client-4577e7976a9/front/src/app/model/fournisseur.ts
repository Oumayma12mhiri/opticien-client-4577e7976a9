import { Categorie } from "./categorie";

export class Fournisseur {
    public id !: number;
    public name!: String;
    public matriculeFiscale!: String;
    public adresse!: String;
    public email!: String;
    public numTel!: String;
    public categorie!: Categorie ;

}