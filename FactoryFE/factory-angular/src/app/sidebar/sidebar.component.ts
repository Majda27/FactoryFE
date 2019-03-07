import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  config = {
    panels: [
      { name: 'Ordinateur', pathliste: '/ordinateurliste', pathadd:'ordinateuradd' },
      { name: 'Video projecteur', pathliste: '/videoprojecteurliste', pathadd:'videoprojecteuradd' },
      { name: 'Salles', pathliste: '/salleliste', pathadd:'salleadd' },
      { name: 'Gestionnaire', pathliste: '/gestionnaireliste', pathadd:'gestionnaireadd' },
      { name: 'Technicien', pathliste: '/technicienliste', pathadd:'technicienadd' },
      { name: 'Formateur', pathliste: '/formateurliste', pathadd:'formateuradd' },
      { name: 'Stagiaire', pathliste: '/stagiaireliste', pathadd:'stagiaireadd' },
      { name: 'Matières', pathliste: '/matiereliste', pathadd:'matiereadd' },
      { name: 'Modules', pathliste: '/moduleliste', pathadd:'moduleadd' },
      { name: 'Formations', pathliste: '/formationliste', pathadd:'formationadd' },
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
