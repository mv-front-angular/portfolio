 import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mv-front-angular-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {
  }
  ngOnInit(): void {

    this.languageService.initLanguage()

    this.titleService.setTitle("Marcus Vinícius | Tech Lead | Front-end Developer (Angular) | Especialista em aplicações web");
    this.metaService.addTags([
      { name: 'keywords', content: 'Frontend, Software Engineer, software, developer desenvolvedor, angular' },
      { name: 'description', content: 'Tech Lead e Engenheiro de Software com expertise em desenvolvimento front-end. Sólida atuação com Angular, aplicando boas práticas em arquiteturas de front-end (micro front-ends, design systems, RxJS) e integração com serviços back-end (APIs REST, Node.js, Express). Forte conhecimento em processos de CI/CD, versionamento e automação de deploys, além de otimização de performance e usabilidade.' },
    ]);
    
    AOS.init();


  }
}
