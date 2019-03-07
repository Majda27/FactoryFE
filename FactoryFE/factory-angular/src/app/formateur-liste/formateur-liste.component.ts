import { Component, OnInit } from '@angular/core';

import { Formateur } from '../formateur';
import { FormateurService } from '../formateur.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formateur-liste',
  templateUrl: './formateur-liste.component.html',
  styleUrls: ['./formateur-liste.component.css']
})
export class FormateurListeComponent implements OnInit {
  // formateurs=ListeFormateurs;



  selectedFormateur: Formateur;
  formateurs;
  formateur;

  constructor(private formateurService: FormateurService,
    private location: Location) { }

  ngOnInit() {
    this.getFormateurs();
  }

  getFormateurs(): void {
    this.formateurService.getFormateurs()
      .subscribe(formateurs => this.formateurs = formateurs);
  }

  // ifClickOnFormateur(formateur: Formateur): void {
  //   this.selectedFormateur = formateur;

  //  }

  delete(formateur: Formateur): void {
    this.formateurs = this.formateurs.filter(f => f !== formateur);
    this.formateurService.deleteFormateur(formateur).subscribe();
  }



  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.formateurService.updateFormateur(this.formateur)
      .subscribe(() => this.goBack());
  }
}
