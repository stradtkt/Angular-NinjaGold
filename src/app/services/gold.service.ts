import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoldService {
  sender: String = '';
  // tslint:disable-next-line:no-inferrable-types
  sum: number = 0;
  random: number;
  messages: String[] = [];
  constructor() { }

  Gold(sender: String, min, max) {
    this.random = Math.floor(Math.random() * (max - min + 1) + min);
    this.sum += this.random;
    this.displayMessage(sender, this.random);
    return this.random;
  }

  displayMessage(sender: String, gold: number) {
    if (gold < 0) {
      this.messages.push('You have lost ' + gold + ' gold at the ' + sender + '.');
    } else {
      this.messages.push('You have gained ' + gold + ' gold at the ' + sender + '.');
    }
  }
}
