import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  config = {
    panels: [
      { name: 'Ordinateur', description: 'Actions', path: '/ordinateur' },
      { name: 'Video projecteur', description: 'Actions', path: '/videoproj' },
      { name: 'Salles', description: 'Actions', path: '/salle' },
      { name: 'Gestionnaire', description: 'Actions', path: '/formateur' },
      { name: 'Technicien', description: 'Actions', path: '/formateur' },
      { name: 'Formateur', description: 'Actions', path: '/matiere' },
      { name: 'Stagiaire', description: 'Actions', path: '/formateur' },
      { name: 'Matières', description: 'Actions', path: '/formateur' },
      { name: 'Modules', description: 'Actions', path: '/formateur' },
      { name: 'Formations', description: 'Actions', path: '/formateur' },
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
