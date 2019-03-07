import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Matiere } from '../matiere';
import { MatiereService } from '../matiere.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-matiere-edit',
  templateUrl: './matiere-edit.component.html',
  styleUrls: ['./matiere-edit.component.css']
})
export class MatiereEditComponent implements OnInit {

  matiere: Matiere;


  constructor(
    private route: ActivatedRoute,   
    private matiereService: MatiereService, 
    private location: Location) { }

  ngOnInit() {
  this.getMatiere();
  }
  getMatiere(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.matiereService.getMatiere(id)
      .subscribe(matiere => this.matiere = matiere);
  }
  
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.matiereService.updateMatiere(this.matiere)
      .subscribe(() => this.goBack());
      alert("Vos modifications ont bien été enregistrées");
  }
}


