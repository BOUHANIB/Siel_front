import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Exposant} from "../../../Model/Exposant/exposant.model";
import {Livre} from "../../../Model/Livre/livre.model";
import {LivreService} from "../../../Service/Livre/livre.service";
import {ExposantService} from "../../../Service/Exposant/exposant.service";

@Component({
  selector: 'app-new-livre',
  templateUrl: './new-livre.component.html',
  styleUrls: ['./new-livre.component.css']
})
export class NewLivreComponent implements OnInit{

  public livreForm!:FormGroup;
  public exposants: Exposant[] = [];
  constructor(private fb:FormBuilder , private livreService:LivreService ,private exposantService: ExposantService) {
  }
  ngOnInit(): void {
    this.livreForm = this.fb.group({
      titre :this.fb.control('',[Validators.required]),
      auteur:this.fb.control(''),
      editeur:this.fb.control(''),
      date_edition:this.fb.control(''),
      prix:this.fb.control(0),
      isbn:this.fb.control(''),
      exposant:this.fb.control('',[Validators.required]),
    });
    this.getExposants();
  }

  saveLivre() {
    console.log(this.livreForm.value); // Vérifier les données du livre avant l'envoi au backend
    let livre: Livre = this.livreForm.value;
    this.livreService.saveLivre(livre).subscribe({
      next: data => {
        console.log(data); // Vérifier la réponse du backend
        if (data) {
          alert(JSON.stringify(data));
        } else {
          alert("La réponse du serveur est vide."); // Ajustez le message selon le cas
        }
      },
      error: err => {
        console.log(err); // Afficher l'erreur dans la console pour mieux comprendre
        alert("Une erreur s'est produite lors de la création du livre."); // Ajustez le message selon le cas
      }
    });
  }

  getExposants() {
    this.exposantService.getExposants().subscribe({
      next: data => {
        this.exposants = data;
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
