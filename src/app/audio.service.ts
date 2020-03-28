import { Injectable } from '@angular/core';
import { Howl } from 'howler'
@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  audioList = {
    gameAudio : new Howl({
      src:['../assets/audio/takeonme.mp3'],
      loop:true,
      volume:3,
      html:true
    })
  }
  loadGameAudio(){
    this.audioList.gameAudio.load();
  }
  playGameAudio(){
    this.audioList.gameAudio.play();
  }
}
