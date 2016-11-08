var counter =0;

//use constructor to give dice a value
let dieContainer: HTMLElement;

document.addEventListener('DOMContentLoaded', () => {
   dieContainer = document.getElementById('dieContainer')

});

function generateRandomNumber(): string {
   return String(Math.floor(Math.random() * 6) + 1);
}

class Die {
   div: HTMLElement;
   id: number;
   
   constructor() {
       counter++
       this.div = document.createElement('div');
       this.div.className = 'die';
       this.div.innerHTML = generateRandomNumber();
       this.insertDie();
       this.id = counter;
       this.div.addEventListener('dblclick', () => {
           this.div.remove();
       })
       //run for loop to find id in array, then remove that id
   }
   rollDie() {
       this.div.innerHTML = generateRandomNumber();
   }

   insertDie() {
       dieContainer.appendChild(this.div);
   }

}

let dieArray: Array<Die> = [];

function addDie() {
   let die = new Die();
   dieArray.push(die);
}

function rollAllDice () {
   for ( let i = 0; i < dieArray.length; i++) {
       dieArray[i].rollDie();
   }
}
   function sumDice() {
       let sum: number = 0;
       for (let i = 0; i < dieArray.length; i++) {
           sum += Number(dieArray[i].div.innerHTML);
       }
       alert ('This is the sum of the dice:' + (sum));
   }

   function removeDie() {
    var currentDie = document.getElementsByClassName("Die");;
    var total = 0;
    for (var i = 0; i < currentDie.length; i++) {
       total += currentDie[i].value;
   }
   }
