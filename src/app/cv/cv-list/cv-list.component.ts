import { Component, OnInit } from '@angular/core';
import { CV } from '../cv.model';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css'],
})
export class CvListComponent implements OnInit {
  cv: CV[] = [
    new CV(
      'Översättare och webbredaktör',
      'Kenneth von Zeipel Text & Web',
      'feb 2007 - (pågående)',
      'Frilansande översättare, främst från nederländska och engelska. Frilansande webbredaktör, främst inom WordPress och Hippo.'
    ),
    new CV(
      'Översättare och webbredaktör samt ansvarig för sociala medier på konsultbasis',
      'Aruba Tourism Authority',
      'jan 2013 - jul 2020',
      'Översättning från engelska och nederländska till svenska och målgruppsanpassning samt skapande av innehåll till den svenska versionen av Aruba.com, med hjälp av CMS-verktygen TYPO3, Drupal och Hippo. Översättning av nyhetsbrev och annat marknadsföringsmaterial. Hantering av översättningar till andra nordiska språk. Korrekturläsning av översättningar utförda av externa partners. Skapande och övervakande av inlägg på sociala medier, inklusive bildredigering.'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}