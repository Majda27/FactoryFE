import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  config = {
    panels: [
      { name: 'Ordinateur', description: 'Actions' },
      { name: 'Video projecteur', description: 'Actions' },
      { name: 'Salles', description: 'Actions' },
      { name: 'Gestionnaire', description: 'Actions' },
      { name: 'Technicien', description: 'Actions' },
      { name: 'Formateur', description: 'Actions' },
      { name: 'Stagiaire', description: 'Actions' },
      { name: 'Matières', description: 'Actions' },
      { name: 'Modules', description: 'Actions' },
      { name: 'Formations', description: 'Actions' },
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
