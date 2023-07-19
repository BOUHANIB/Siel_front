import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExposantService} from "../../../Service/Exposant/exposant.service";
import {Exposant} from "../../../Model/Exposant/exposant.model";

@Component({
  selector: 'app-new-exposant',
  templateUrl: './new-exposant.component.html',
  styleUrls: ['./new-exposant.component.css']
})
export class NewExposantComponent implements OnInit{

  public exposantForm!:FormGroup;

  constructor(private fb:FormBuilder , private exposantService:ExposantService) {
  }
  ngOnInit(): void {
    this.exposantForm = this.fb.group({
      nom : this.fb.control('',[Validators.required]),
      pays : this.fb.control(''),
      e_mail : this.fb.control('',[Validators.required]),
      password : this.fb.control('',[Validators.required]),
      telephone : this.fb.control(''),
      site_Web : this.fb.control(''),
      adresse : this.fb.control(''),
      responsable_Salle : this.fb.control(''),
      responsable : this.fb.control(''),
      specialite : this.fb.control(''),
      localisation : this.fb.control(''),
    })
  }

  saveExposant() {
      console.log(this.exposantForm.value); // Vérifier les données du livre avant l'envoi au backend
    let exposant:Exposant = this.exposantForm.value;
    this.exposantService.saveExposant(exposant).subscribe({
      next:data => {
        console.log(data); // Vérifier la réponse du backend
        alert(JSON.stringify(data));
      },error:err => {
        console.log(err)
      }
    });
  }
}
