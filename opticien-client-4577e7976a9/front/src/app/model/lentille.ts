import { Fournisseur } from "./fournisseur";


export class Lentille {

    public id !:number;
    public base !:String;

    public code !:String;

    public coloration !:String;

    public description !:String;

    public marque !:String;

    public matiere !:String;

    public photochromique !:String;

    public addInf !:number;

    public addSup !:number;

    public axe !:number;

    public cylInf !:number;

    public cylSup !:number;

    public sphInf !:number;

    public sphSup !:number;

    public dia !:number;
    public indice !:number;
    public prixAchat !:number;

    public prixVente !:number;
    public fournisseur: Fournisseur;
}