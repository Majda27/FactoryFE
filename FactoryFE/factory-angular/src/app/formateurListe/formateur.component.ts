import { Component, OnInit } from '@angular/core';
import { ListeFormateurs } from '../mock-formateur';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  formateurs=ListeFormateurs;

  constructor() { }

  ngOnInit() {
  }

}
