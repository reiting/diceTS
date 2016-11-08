var counter = 0;
var dieArray = [];
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
        this.div.id = this.id.toString();
        this.div.addEventListener('dblclick', function () {
            _this.div.remove();
            var idToRemove = _this.div.id;
            removeDie(idToRemove);
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
function removeDie(idToRemove) {
    console.log('begin: ');
    console.log(dieArray);
    var dieToRemove;
    dieArray.forEach(function (die) {
        if (die.div.id === idToRemove) {
            dieToRemove = die;
        }
    });
    var indexToRemove = dieArray.indexOf(dieToRemove);
    console.log("die is at current postion: " + indexToRemove);
    dieArray.splice(indexToRemove, 1);
    console.log(dieArray);
}
