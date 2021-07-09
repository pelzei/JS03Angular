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
    new CV(
      'Svensk lingvist (konsultuppdrag)',
      'LocTeam',
      'sep 2016 - jan 2017',
      'Ordboksstrukturering åt extern klient.'
    ),
    new CV(
      'Uppsatshandledare',
      'Uppsala universitet',
      'maj 2016 - sep 2016',
      'Handledning av student som skrev sin kandidatuppsats inom översättningsteori.'
    ),
    new CV(
      'Språkkonsult i nederländska',
      'STTS',
      'jun 2016 - jul 2016',
      'Anpassning och kvalitetskontroll av fraser skapade med hjälp av talsyntes.'
    ),
    new CV(
      'Speech Data Evaluator',
      'Google',
      'sep 2014 - jul 2015',
      'Klassificering och annotering av svenska språkdata; etiketterande av svensk text för disambiguering, expansion och textnormalisering; fonetisk transkribering av ord i lexikon; kvalitetskontroll av rösttalangens inspelningar.'
    ),
    new CV(
      'Universitetslärare',
      'Uppsala universitet',
      'feb 2015 - mar 2015',
      'Lärare för kursen ”Översättningsteori med inriktning mot översättning till/från arabiska, hindi, kurdiska, persiska, turkiska” (7½ hp)'
    ),
  ];
  utb: CV[] = [
    new CV(
      'Kvalificerad yrkeshögskoleexamen, Frontendutvecklare',
      'EC Utbildning',
      'okt 2020 - jun 2022',
      'Kurser: Agila projektmetoder, UX och grafisk design, HTML & CSS, Javascript, Backend för frontendutvecklare, praktik, examensarbete.'
    ),
    new CV(
      'Masterexamen i iranska språk',
      'Uppsala universitet',
      'sep 2010 - feb 2020',
      'Inriktning mot persiska och översättningsvetenskap.'
    ),
    new CV(
      'Kinesiskkurs',
      'National Chengchi University',
      'sep 2018 - maj 2019',
      '3 språkkurser på vardera 3 månader (H1, H2, H3) vid NCCU Chinese Language Center'
    ),
    new CV(
      'Kinesiskkurs',
      'National Chengchi University',
      'mar 2017 - aug 2017',
      '2 språkkurser på vardera 3 månader (I2, I3) vid NCCU Chinese Language Center'
    ),
    new CV(
      'Kinesiskkurs',
      'National Taiwan University',
      'mar 2016 - maj 2016',
      '3-månaders kinesiskkurs.'
    ),
    new CV(
      'Utbytesstudent på masternivå',
      'National Taiwan University',
      'sep 2011 - jul 2012',
      'Kurser inom datalingvistik, fonetik, kinesiska och geologi.'
    ),
    new CV(
      'Kandidatexamen i iranska språk',
      'Uppsala universitet',
      'sep 2004 - aug 2010',
      'Huvudämne: persiska'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
