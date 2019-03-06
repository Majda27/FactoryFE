import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  config = {
    panels: [
      { name: 'Ordinateur', description: 'Actions', pathliste: '/ordinateurliste', pathadd:'ordinateuradd' },
      { name: 'Video projecteur', description: 'Actions', pathliste: '/videoprojecteurliste', pathadd:'videoprojecteuradd' },
      { name: 'Salles', description: 'Actions', pathliste: '/salleliste', pathadd:'salleadd' },
      { name: 'Gestionnaire', description: 'Actions', pathliste: '/gestionnaireliste', pathadd:'gestionnaireadd' },
      { name: 'Technicien', description: 'Actions', pathliste: '/technicienliste', pathadd:'technicienadd' },
      { name: 'Formateur', description: 'Actions', pathliste: '/formateurliste', pathadd:'formateuradd' },
      { name: 'Stagiaire', description: 'Actions', pathliste: '/stagiaireliste', pathadd:'stagiaireadd' },
      { name: 'Matières', description: 'Actions', pathliste: '/matiereliste', pathadd:'matiereadd' },
      { name: 'Modules', description: 'Actions', pathliste: '/moduleliste', pathadd:'moduleadd' },
      { name: 'Formations', description: 'Actions', pathliste: '/formationliste', pathadd:'formationadd' },
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
