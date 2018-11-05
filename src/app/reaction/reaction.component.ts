import { Component, OnInit } from '@angular/core';
import { Reaction } from './reaction';
import { ReactionService } from './reaction.service';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css']
})
export class ReactionComponent implements OnInit {
  title = "Reaction Entry"

  constructor(private _reactionService: ReactionService) { }

  reaction = new Reaction();
  reactions = []

  ngOnInit() {
    // console.log("reaction.component ngOnInit()")
    this.reactions = this._reactionService.getReactions();
  }
  onSubmit(){
    // console.log("inside add")
    this._reactionService.addReaction(this.reaction);
    this.reaction = new Reaction();
  }

}
