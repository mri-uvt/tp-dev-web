import { Injectable } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  goals = ['goal1','goal2'];

  constructor() { }

  getGoal() {
    return this.goals;
  }
}
