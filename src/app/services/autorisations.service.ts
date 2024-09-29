import { Injectable } from '@angular/core';
import { Autorisation } from '../models/models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorisationsService {

  private autorisationList: Autorisation[] = [];
  autorisationsChange$ = new Subject<Autorisation[]>();

  constructor() { }

  addAutorisation(autorisation: Autorisation) {
    autorisation.status = 'Nouveau';
    autorisation.id = Math.random().toString(36);
    this.autorisationList.push(autorisation);
    this.autorisationsChange$.next(this.autorisationList);
  }

  updateAutorisation(autorisation: Autorisation) {
    autorisation.status = 'Modifié';
    const index = this.autorisationList.findIndex((a) => a.id === autorisation.id);
    this.autorisationList[index] = autorisation;
    this.autorisationsChange$.next(this.autorisationList);
  }

  deleteAutorisation(autorisation: Autorisation) {
    this.autorisationList = this.autorisationList.filter((a) => a !== autorisation);
    this.autorisationsChange$.next(this.autorisationList);
  }
}
