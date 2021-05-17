import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  FormacaoComplementar,
  FormacaoComplementarList,
  FormacaoComplementarCategorias,
} from '../../data/formacao-complementar';

@Injectable({
  providedIn: 'root',
})
export class FormacaoComplementarService {
  private collection: BehaviorSubject<FormacaoComplementar[]>;

  constructor() {
    this.collection = new BehaviorSubject(FormacaoComplementarList);
  }

  collectionChanges(): Observable<FormacaoComplementar[]> {
    return this.collection.asObservable();
  }

  categorias(): string[] {
    return ['Principais', ...FormacaoComplementarCategorias];
  }

  filtrar(categoria: string) {
    const list = FormacaoComplementarList.filter((fc, i) =>
      fc.categorias.some((cat, i) => cat === categoria)
    );
    if (categoria !== 'Principais') {
      this.collection.next(list);
    } else {
      this.collection.next(FormacaoComplementarList);
    }
  }
}
