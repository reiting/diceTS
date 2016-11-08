var counter = 0;
//use constructor to give dice a value
var dieContainer;
document.addEventListener('DOMContentLoaded', function () {
    dieContainer = document.getElementById('dieContainer');
});
function generateRandomNumber() {
    return String(Math.floor(Math.random() * 6) + 1);
}
var Die = (function () {
    function Die() {
        var _this = this;
        counter++;
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.innerHTML = generateRandomNumber();
        this.insertDie();
        this.id = counter;
        this.div.addEventListener('dblclick', function () {
            _this.div.remove();
        });
        //run for loop to find id in array, then remove that id
    }
    Die.prototype.rollDie = function () {
        this.div.innerHTML = generateRandomNumber();
    };
    Die.prototype.insertDie = function () {
        dieContainer.appendChild(this.div);
    };
    return Die;
}());
var dieArray = [];
function addDie() {
    var die = new Die();
    dieArray.push(die);
}
function rollAllDice() {
    for (var i = 0; i < dieArray.length; i++) {
        dieArray[i].rollDie();
    }
}
function sumDice() {
    var sum = 0;
    for (var i = 0; i < dieArray.length; i++) {
        sum += Number(dieArray[i].div.innerHTML);
    }
    alert('This is the sum of the dice:' + (sum));
}
function removeDie() {
}
//     rollDie(){
//         //rolls your dice
//     }
//     removeDie(){
//         //removes this instance of a dice
//     }
// }
// class DieCreator {
//     addDie(){
//     }
// }
// interface IDie {
//     value: number;
//     class?: string; 
//     // if you use a question mark after the key, it is an optional key as far as expected shape of the object is concerned
//     // interfaces set the expected value type of keys of an object
// }
// this.div.remove will remove the div on dblclick
// // let variables only exist inside the closest block, var variables are in the entire funciton. '''
