let currentMoleTile;// help us to track that which tile ahs the mole
let currentPlantTile;
let score = 0;
let gameOver= false;


window.onload = function (){
    setGame ();
}

function setGame(){
    // setup the grid for the game board in html
    for(let i =0; i<9; i++){// i goes from 0 to 8 and stops at 9
        //<div id= "0-8" ></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener('click',selectTile);// identitifing which tile hasa click on, we set id
        document.getElementById("board").appendChild(tile);
       

    }
    setInterval(setMole, 1000); // for every 1sec the mole will appear
    setInterval(setPlant,2000); //for every 2 sec plant will be placed

}
function getRandomNumber(){
    // math.random return a number between 0 and 1(excluded) then x(9) gives a random number between 0 and 9 (excluded), when rounded the number using math.floor the function will return an integer between 0-8;

    let num = Math.floor(Math.random()*9);
    return num.toString();
}



function setMole(){
    if(gameOver)return;
    // to remove the previous mole from the board
    if(currentMoleTile){
       currentMoleTile.innerHTML = ""; 
    
    }

    let mole = document.createElement("img")
    mole.src = "./monty-mole.png";
    // to place the mole on randomly on the tiles
   let num = getRandomNumber();
   if(currentPlantTile && currentPlantTile.id === num){
    return;
   }
   currentMoleTile = document.getElementById(num);
   currentMoleTile.appendChild(mole);

}

function setPlant(){
    if(gameOver)return;
    if(currentPlantTile){
        currentPlantTile.innerHTML = "";
    
    }

    let plant = document.createElement("img");
    plant.src ="./piranha-plant.png";
    
    let num = getRandomNumber();
    if(currentMoleTile && currentMoleTile.id === num){
    return;
    }
    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameOver)return;
    if(this === currentMoleTile){
        score += 10;
        document.getElementById('score').innerText = score.toString();
    }
    else if(this === currentPlantTile){
        document.getElementById('score').innerText = "GAME OVER: "+ score.toString();
        gameOver= true;

    }

}