import { Component, OnInit, Input } from '@angular/core';
import { ReactionService } from '../reaction.service';

@Component({
  selector: 'app-reaction-list',
  templateUrl: './reaction-list.component.html',
  styleUrls: ['./reaction-list.component.css']
})
export class ReactionListComponent implements OnInit {
  title = "Allergic Reactions"
  @Input() reactions;
  constructor(private _reactionService: ReactionService) { }

  // reactions: any

  ngOnInit() {
    // console.log("reaction.component ngOnInit()")
    this.reactions = this._reactionService.getReactions();
  }
}
