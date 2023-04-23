import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  tweetMessage:string=""
  tweetMaxLegth:number = 240
  tweetRemain:number = this.tweetMaxLegth

  sendTweet() {

  }

  changeTweet() {
    this.tweetRemain = 240 - this.tweetMessage.length
  }
}
