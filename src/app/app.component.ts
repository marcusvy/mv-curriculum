import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { EventoList } from 'src/data/evento';
import { FormacaoComplementar } from 'src/data/formacao-complementar';
import { Projeto } from 'src/data/projeto';
import { SocialLinkList } from 'src/data/social';
import { TechSkills } from 'src/data/tech-skill';
import { FormacaoComplementarService } from './services/formacao-complementar.service';
import { ProjetoService } from './services/projeto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private $$: Subscription[] = [];

  title = 'mv-curriculum';
  fcList: FormacaoComplementar[] = [];
  fcCategoriaSelecionada: string | null = null;
  projetoList: Projeto[] = [];
  dialogRef = null;
  @ViewChild('verProjetoDialog')
  dialogTemplate: any = null;
  projetoSelecionado: Projeto | null = null;
  techskills = TechSkills;
  socialLinks = SocialLinkList;
  eventos = EventoList;

  constructor(
    private fcService: FormacaoComplementarService,
    private projetoService: ProjetoService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.$$[0] = this.fcService
      .collectionChanges()
      .subscribe((list) => (this.fcList = list));

    this.$$[0] = this.projetoService
      .collectionChanges()
      .subscribe((list) => (this.projetoList = list));
  }

  fcCategorias(): string[] {
    return this.fcService.categorias();
  }

  fcFiltrar(categoria: string) {
    this.fcCategoriaSelecionada = categoria;
    return this.fcService.filtrar(categoria);
  }

  projetos(): Projeto[] {
    return [];
  }

  projetoCategorias(): string[] {
    return this.projetoService.categorias();
  }

  projetoFiltrar(categoria: string) {
    return this.projetoService.filtrar(categoria);
  }

  verProjeto(projeto: Projeto) {
    this.projetoSelecionado = projeto;
    this.dialog.open(this.dialogTemplate);
  }

  verProjetoTecnologias(projeto: Projeto | null): string {
    if (projeto !== null && projeto !== undefined) {
      if (projeto.tecnologias !== null && projeto.tecnologias !== undefined) {
        return projeto.tecnologias.join(', ');
      }
    }
    return '';
  }

  skillRanking(size: number): [] {
    return [].constructor(size);
  }
}
