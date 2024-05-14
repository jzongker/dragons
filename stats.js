//test 1:
let greeting = "Ahoy there";
console.log(greeting);
//works fine!!

/* previously grabbed images with this code:
const hicImage = document.querySelector("#hicImage"); */

/* Previously altered card colors with this code:
const cardHeadColor1 = document.getElementById("card1head").style.backgroundColor = "rgb(0,0,0)";
const cardColor1 = document.getElementById("card1").style.backgroundColor = "rgb(0,0,0)";

function card1ColorChange() {
    cardHeadColor1(humans[0]);
    cardColor1(humans[0]);
}; */

//start human array
const humans = [{
    name: "Hiccup Horrendous Haddock III",
    dragon: "Toothless",
    age: "15/20/21",
    bravery: 4,
    intelligence: 5,
    speed: 5,
    attack: 2,
    defense: 3,
    image: "Images/Fanart/Hiccup.jpg",
    color: "rgb(0,0,0)",
},
{
    name: "Astrid Hofferson",
    dragon: "Stormfly",
    age: "15/20/21",
    bravery: 4,
    intelligence: 5,
    speed: 4,
    attack: 4,
    defense: 3,
    image: "Images/Fanart/astrid.jpg",
    color: "rgb(0, 136, 255)",
},
{
    name: "Ruffnut Thorston",
    dragon: "Barf (& Belch)",
    age: "14/19/20",
    bravery: 4,
    intelligence: 2,
    speed: 3,
    attack: 5,
    defense: 1,
    image: "Images/Fanart/Thorstons.jpg",
    color: "rgb(22, 188, 22)",
},
{
    name: "Tuffnut Thorston",
    dragon: "Belch (& Barf)",
    age: "14/19/20",
    bravery: 2,
    intelligence: 3,
    speed: 2,
    attack: 5,
    defense: 3,
    image: "Images/Fanart/Thorstons.jpg",
    color: "rgb(22, 188, 22)",
},
{
    name: "Fishlegs Ingerman",
    dragon: "Meatlug",
    age: "14/19/20",
    bravery: 1,
    intelligence: 5,
    speed: 1,
    attack: 4,
    defense: 4,
    image: "Images/Fanart/fishlegsig.jpg",
    color: "rgb(125, 113, 36)",
},
{
    name: "Snotlout Jorgenson",
    dragon: "Hookfang",
    age: "15/20/21",
    bravery: 5,
    intelligence: 3,
    speed: 3,
    attack: 5,
    defense: 3,
    image: "Images/Fanart/Snotloutig.jpg",
    color: "rgb(252, 92, 0)",
}];
//end human array

//start human card functions
function fillCard() {
    let result = [];
    for (let i = 0; i < humans.length; i++) {
        const human = humans[i];
        const card = getCard(human, i + 1);
        result.push(card);
    }
    console.log(result);
    document.getElementById('cardholder').innerHTML = result.join('');
}

function getCard(human, index) {
    let result = '<div class="card" id="card' + index + '">'
   + '  <div class="cardhead" id="card' + index + 'head">'
   + '      <h3>' + human.name + '</h3>'
   + '  </div>'
   + '  <div class="cardcont">'
   + '      <img src="' + human.image + '">'
   + '      <p><span class="bold">Dragon: </span>' + human.dragon + '</p>'
   + '      <p><span class="bold">Age: </span>' + human.age + '</p><br>'
   + getStats(human)
   + '  </div>'
   + '</div>';
   return result;
}

function getStats(human) {
    let result = '<table class="starstats">'
    + '<tr><td>Bravery: </td><td>' + human.bravery + '</td></tr>'
    + '<tr><td>Intelligence: </td><td>' + human.intelligence + '</td></tr>'
    + '<tr><td>Speed: </td><td>' + human.speed + '</td></tr>'
    + '<tr><td>Attack: </td><td>' + human.attack + '</td></tr>'
    + '<tr><td>Defense: </td><td>' + human.defense + '</td></tr>'
    +'</table>'
    return result;
}
//end human card functions

/* from notepad:
 for (let i = 0; i < humans.length; i++) result.push(getCard(humans[i], i + 1));

 same as:

for (let i = 0; i < humans.length; i++) {
	const human = humans[i];
	const card = getCard(human, i + 1);
	result.push(card);
 */