import { Component, OnInit } from '@angular/core';
declare const Hammer;
@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  gameOver: boolean = false;

  constructor() { }
  animals: any[] = [{ name: 'maina', flight: 'up' },
  { name: 'ghoda', flight: 'down' },
  { name: 'hathi', flight: 'down' },
  { name: 'ostrich', flight: 'down' },
  { name: 'penguin', flight: 'down' },
  { name: 'billi', flight: 'down' },
  { name: 'tota', flight: 'up' },
  { name: 'baaz', flight: 'up' },
  { name: 'chaalbaaz', flight: 'down' },
  { name: 'dagabaaz', flight: 'down' },
  { name: 'girrafe', flight: 'down' },
  { name: 'qunami', flight: 'up' },
  { name: 'plane', flight: 'down' },
  { name: 'aeroplane', flight: 'up' },
  { name: 'Helipad', flight: 'down' },
  { name: 'Hanuman', flight: 'up' },
  { name: 'spiderman', flight: 'down' },
  { name: 'kauwa', flight: 'up' },
  { name: 'ladki', flight: 'up' },
  { name: 'Thaili', flight: 'up' },
  { name: 'Thali', flight: 'down' },
  { name: 'Afwah', flight: 'up' },
  { name: 'Modiji', flight: 'up' },
  { name: 'Murgi', flight: 'down' },
  { name: 'scooter', flight: 'down' },
  { name: 'Titar', flight: 'up' },
  { name: 'Chamgadad', flight: 'up' },
  { name: 'Cheel', flight: 'up' },
  { name: 'Data', flight: 'up' },
  { name: 'Data', flight: 'up' },
  { name: 'Hero', flight: 'up' },
  { name: 'A380', flight: 'up' },
  { name: 'Jahaz', flight: 'up' },
  ]
  lives = [{ used: false }, { used: false }, { used: false },]
  points = 0
  currentAnimal = null;
  livesLeft = this.lives.length
  ngOnInit() {
    this.initLives(3);
    if(!this.gameOver)
    this.initGame();
    
  }
  initLives(Count) {
    for(var i = 0; i < Count; i++){
      this.lives[i].used = false;
    }
  }
  ngAfterViewInit(){

  }
  initGame() {
    console.log("init game")
    var random = Math.floor(Math.random() * this.animals.length);
    this.currentAnimal = this.animals[random];
    setTimeout(() => {
      this.addSwipeEvet()
    }, 10);

    
  }
  addSwipeEvet(){
    var animal = document.getElementById('animal_name');

    var manager = new Hammer.Manager(animal);

    var Swipe = new Hammer.Swipe();
    manager.add(Swipe);
    

    manager.on('swipe',(e)=>{
     
        var direction = e.offsetDirection;
        console.log(direction)
       
        if (direction === 16) {//down
        this.animateSwipe('down');
        //  e.target.style.transform = 'translate(0px, 200px)';
        //  setTimeout(() => {
        //    if(this.currentAnimal.flight == false){
        //      e.target.classList.add('correct');
        //      this.points = this.points + 10
        //    }
        //    else{
        //      e.target.classList.add('wrong');
        //      this.lives[this.livesLeft-1].used = true;
        //     this.livesLeft -= 1;
            
        //    }
        //    if(this.livesLeft == 0){
        //      setTimeout(() => {
        //        this.gameOver = true;
        //      }, 300);
        //   }
        //   else
        //    this.resetGame()
        //  }, 300);
        }
        else if(direction == 8){//up
          this.animateSwipe('up');
          // e.target.style.transform = 'translate(0px, -200px)';
          // setTimeout(() => {
          //   if(this.currentAnimal.flight == true){
          //     e.target.classList.add('correct');
          //     this.points  = this.points + 10;
          //   }
          //   else{
          //     e.target.classList.add('wrong');
          //     this.lives[this.livesLeft-1].used = true;
          //     this.livesLeft -= 1;
          //   }
          //   if(this.livesLeft == 0){
          //     setTimeout(() => {
          //       this.gameOver = true;
          //     }, 300);
          //   }
          //   else
          //   this.resetGame()
          // }, 300);
        }
    })

  }
  animateSwipe(direction){//when user swipes this funn decides its a correct swipe or wrong swipe
    var elem = document.getElementById('animal_name');
    var pointsElem = document.getElementById('points');

    if(direction == this.currentAnimal.flight){//correct swipe
      elem.classList.add(direction);
      setTimeout(() => {
        pointsElem.style.transform = 'scale(1.5)';
        this.points = this.points + 10;
        elem.classList.add('correct')
      }, 300);
    }
    else{//wrong swipe
      // this.points = this.points - 2;
      this.lives[this.livesLeft-1].used = true;
      this.livesLeft -= 1;
      elem.classList.add(direction);
      setTimeout(() => {
        elem.classList.add('wrong')
        
      }, 300);
      
    }

    // after animation reset for next name;
    setTimeout(() => {
      if(this.livesLeft == 0){
            setTimeout(() => {
              this.gameOver = true;
            }, 300);
          }
          else
          this.resetGame()
    }, 300);
      
  }
  resetGame(){
    setTimeout(() => {
      document.getElementById('animal_name').style.transform = 'translate(0px, 0px)';
      document.getElementById('animal_name').classList.remove('correct','wrong','up','down');
      this.currentAnimal = null;
      setTimeout(() => {
        this.initGame();
      }, 300);
    }, 500);
  }
  playAgain(){
    this.points = 0;
    this.livesLeft = this.lives.length;
    this.initLives(3);
    setTimeout(() => {
      this.gameOver = false;
      // this.resetGame();
      this.initGame()
    }, 300);
  }
}
