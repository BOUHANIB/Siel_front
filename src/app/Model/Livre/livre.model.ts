import {Exposant} from "../Exposant/exposant.model";

export interface Livre {
  livreId: number,
  titre :string,
  auteur:string,
  editeur:string,
  date_edition:string,
  prix:number,
  isbn:string,
  exposant:Exposant,
}
