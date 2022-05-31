import { Fournisseur } from "./fournisseur";

export class Divers {
    public id!: number;
    public name!: String;
    public reference!: String;
    public prixAchat!: number;
    public prixVente!: number;
    public quantite!: number;
    public fournisseur: Fournisseur;
}