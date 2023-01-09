//wait for dom to finish loading before runnning the game.
//add game area and buttons with event listeners

document.addEventListener("DOMContentLoaded", function() {
    
    //get the button elements and add event listeners 
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "start-game"){
                runGame();
            } else if (this.getAttribute("data-type") === "leaderboard"){
                goToLeaderboard()
            } else {
                alert("Something went wrong!")
            }
        })
        
    }
});

    
function runGame(){
    let labyrinth = document.querySelector('.labyrinth');

    const area = [];
    for (let i = 0; i < 4; i++) {
      const row = [];
      for (let j = 0; j < 4; j++) {
        const element = document.createElement('div');
        element.innerText = i * 4 + j;
        element.style.display = 'inline-block';
        element.style.width = '30px';
        element.style.height = '30px';
        element.style.border = '1px solid black';
        element.style.textAlign = 'center';
        row.push(element);
      }
      area.push(row);
    }

    labyrinth.innerHTML = '';
    area.forEach(row => {
      row.forEach(element => labyrinth.appendChild(element));
      labyrinth.appendChild(document.createElement('br'));
    });
}

function goToLeaderboard(){
    alert("This function doesn't work yet, please try again later")
}