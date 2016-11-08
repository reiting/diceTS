var counter = 0;
let dieArray: Array<Die> = [];

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
       this.div.id = this.id.toString();
       this.div.addEventListener('dblclick', () => {
           this.div.remove();
           let idToRemove: string = this.div.id;
                                    die.div.id
           removeDie(idToRemove);
           
       });
       //run for loop to find id in array, then remove that id
   }
   rollDie() {
       this.div.innerHTML = generateRandomNumber();
   }

   insertDie() {
       dieContainer.appendChild(this.div);
   }

}



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

function removeDie(idToRemove: string) {
    console.log('begin: '); 
    console.log(dieArray);
    let dieToRemove: Die;
    dieArray.forEach(function(die){
        if(die.div.id === idToRemove){
            dieToRemove = die;
        }
    });
    let indexToRemove: number = dieArray.indexOf(dieToRemove);
    console.log("die is at current postion: " + indexToRemove);
    dieArray.splice(indexToRemove, 1);
    console.log(dieArray);
}
