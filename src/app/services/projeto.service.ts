import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Projeto,
  ProjetoCategorias,
  ProjetoCollection,
} from 'src/data/projeto';

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  private collection: BehaviorSubject<Projeto[]>;

  constructor() {
    this.collection = new BehaviorSubject(ProjetoCollection);
  }

  collectionChanges(): Observable<Projeto[]> {
    return this.collection.asObservable();
  }

  categorias(): string[] {
    return ['Principais', ...ProjetoCategorias];
  }

  filtrar(categoria: string) {
    const list = ProjetoCollection.filter((p, i) =>
      p.categorias.some((cat, i) => cat === categoria)
    );
    if (categoria !== 'Principais') {
      this.collection.next(list);
    } else {
      this.collection.next(ProjetoCollection);
    }
  }
}
