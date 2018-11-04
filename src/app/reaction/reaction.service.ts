import { Injectable } from '@angular/core';
import { Reaction } from './reaction';

@Injectable({
  providedIn: 'root'
})

export class ReactionService {

  reactions = [];
  // numbers = [1,2,3];
    constructor() { }

    addReaction(n: Reaction): void {
      this.reactions.push(n);
    }

    getReactions(): Reaction[] {
      // console.log("inside getReactions()")
      return this.reactions;
    }

}
