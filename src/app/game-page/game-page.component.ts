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
  animals: any[] = [{ name: 'maina', flight: true },
  { name: 'ghoda', flight: false },
  { name: 'hathi', flight: false },
  { name: 'ostrich', flight: false },
  { name: 'penguin', flight: false },
  { name: 'billi', flight: false },
  { name: 'tota', flight: true },
  { name: 'baaz', flight: true },
  { name: 'chaalbaaz', flight: false },
  { name: 'dagabaaz', flight: false },
  { name: 'girrafe', flight: false },
  { name: 'qunami', flight: true },
  { name: 'plane', flight: false },
  { name: 'aeroplane', flight: true },
  { name: 'Helipad', flight: false },
  { name: 'Hanuman', flight: true },
  { name: 'spiderman', flight: false },
  { name: 'kauwa', flight: true },
  { name: 'ladki', flight: true },
  { name: 'Thaili', flight: true },
  { name: 'Thali', flight: false },
  { name: 'Afwah', flight: true },
  { name: 'Modiji', flight: true },
  { name: 'Murgi', flight: false },
  { name: 'scooter', flight: false },
  { name: 'Titar', flight: true },
  { name: 'Chamgadad', flight: true },
  { name: 'Cheel', flight: true },
  { name: 'Data', flight: true },
  { name: 'Data', flight: true },
  { name: 'Hero', flight: true },
  { name: 'A380', flight: true },
  { name: 'Jahaz', flight: true },
  ]
  lives = [{ used: false }, { used: false }, { used: false },]
  points = 0
  currentAnimal = null;
  livesLeft = this.lives.length
  ngOnInit() {
    this.initLives(3);
    this.initGame();
    
  }
  initLives(Count) {
    
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
  
         e.target.style.transform = 'translate(0px, 200px)';
         setTimeout(() => {
           if(this.currentAnimal.flight == false){
             e.target.classList.add('correct');
             this.points = this.points + 10
           }
           else{
             e.target.classList.add('wrong');
             this.lives[this.livesLeft-1].used = true;
            this.livesLeft -= 1;
            
           }
           if(this.livesLeft == 0){
             setTimeout(() => {
               this.gameOver = true;
             }, 300);
          }
          else
           this.resetGame()
         }, 300);
        }
        else if(direction == 8){//up
          e.target.style.transform = 'translate(0px, -200px)';
          setTimeout(() => {
            if(this.currentAnimal.flight == true){
              e.target.classList.add('correct');
              this.points  = this.points + 10;
            }
            else{
              e.target.classList.add('wrong');
              this.lives[this.livesLeft-1].used = true;
              this.livesLeft -= 1;
            }
            if(this.livesLeft == 0){
              setTimeout(() => {
                this.gameOver = true;
              }, 300);
            }
            else
            this.resetGame()
          }, 300);
        }
    })

  }
  resetGame(){
    setTimeout(() => {
      this.currentAnimal = null;
      document.getElementById('animal_name').style.transform = 'translate(0px, 0px)';
      document.getElementById('animal_name').classList.remove('correct');
      document.getElementById('animal_name').classList.remove('wrong');
      setTimeout(() => {
        this.initGame();
      }, 300);
    }, 500);
  }

}
