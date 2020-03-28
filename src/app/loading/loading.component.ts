import { Component, OnInit } from '@angular/core';
import { AudioService } from '../audio.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  showTime: boolean = false;

  constructor(private audio:AudioService, private router:Router) { }
  time = 3
  ngOnInit() {
    this.loadAudio()
  }
  loadAudio(){
    this.audio.loadGameAudio()
  }
  startPlay(){
    this.audio.playGameAudio();
    this.showTime = true;
    var interval = setInterval(()=>{
      if(this.time == 1){
        clearInterval(interval);
        this.router.navigate(['game'],{skipLocationChange:true})
      }
      else{
        this.time -= 1
      }
    },1000)
  }
}
