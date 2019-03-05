import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  config = {
    panels: [
      { name: 'Gestionnaire', description: 'Actions' },
      { name: 'Formateur', description: 'Actions' },
      { name: 'Technicien', description: 'Actions' },
      { name: 'Stagiaire', description: 'Actions' },
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
