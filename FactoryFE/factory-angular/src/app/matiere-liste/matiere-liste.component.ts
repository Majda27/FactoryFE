import { Component, OnInit } from '@angular/core';
import { Matiere } from '../matiere';
import { MatiereService } from '../matiere.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-matiere-liste',
  templateUrl: './matiere-liste.component.html',
  styleUrls: ['./matiere-liste.component.css']
})
export class MatiereListeComponent implements OnInit {
  selectedMatiere: Matiere;
  matieres;
  constructor(private matiereService: MatiereService,
    private location: Location) { }

  ngOnInit() {
    this.getMatieres();
  }

  

  getMatieres(): void {
    this.matiereService.getMatieres()
      .subscribe(matieres => this.matieres = matieres);
  }

  delete(matiere: Matiere): void {
    this.matieres = this.matieres.filter(m => m !== matiere);
    this.matiereService.deleteMatiere(matiere).subscribe();
  }

}
