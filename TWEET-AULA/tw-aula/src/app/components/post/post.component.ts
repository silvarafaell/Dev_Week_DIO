import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  tweetMessage:string = ""
  tweetMaxLegth:number = 240
  tweetRemain:number = this.tweetMaxLegth

  constructor(private service: MessagesService) {

  }

  sendTweet() {
    this.service.addMessage(this.tweetMessage)
    this.tweetMessage = ""
    this.tweetRemain = this.tweetMaxLegth
  }

  changeTweet() {
    this.tweetRemain = this.tweetMaxLegth - this.tweetMessage.length
  }
}
