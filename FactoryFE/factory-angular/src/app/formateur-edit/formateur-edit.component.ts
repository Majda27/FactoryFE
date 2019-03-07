import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Formateur } from '../formateur';
import { FormateurService } from '../formateur.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-formateur-edit',
  templateUrl: './formateur-edit.component.html',
  styleUrls: ['./formateur-edit.component.css']
})
export class FormateurEditComponent implements OnInit {

  formateur: Formateur;


  constructor(
    private route: ActivatedRoute,   
    private formateurService: FormateurService, 
    private location: Location) { }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    // //Allez  chercher l'id ça dans l'url ;)
  // this.formateur = this.formateurService.getFormateur(id); 
  this.getFormateur();
  }
  getFormateur(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.formateurService.getFormateur(id)
      .subscribe(formateur => this.formateur = formateur);
  }
  
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.formateurService.updateFormateur(this.formateur)
      .subscribe(() => this.goBack());
      alert("Vos modifications ont bien été enregistrées");
  }
}


