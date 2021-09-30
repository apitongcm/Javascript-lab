const enemy = document.getElementById('enemy');
const playerPick = document.getElementById("showkey");
const result = document.getElementById("result");
const myScore = document.getElementById("score");
const alertmsg = document.getElementById("notice");

let score = 0;
let mytry = 0;




function whoWin(e)
{
    
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    //identify what key the player pick. 
    //return if not key with the value of 90,88, and 67.
    if(e.keyCode == '88' || e.keyCode =='90' || e.keyCode == '67')
        {
            
            if(e.keyCode == '88')
            {
                playerPick.innerHTML = "Scissor";
                key.classList.add('playing');
            }
            else if(e.keyCode == '90')
            {
                playerPick.innerHTML = "Paper";
                key.classList.add('playing');
            }
            else
            {
                playerPick.innerHTML = "Rock";
                key.classList.add('playing');
            }
        }
        else
        {
            return 
        }  

        //key choice of the enemy.
        //using Random 
       
        const choice = [90,88,67];
        const enemyPick = ["Paper","Scissor","Rock"];
        const index = Math.floor(Math.random() * 3); 
        
        enemy.innerHTML = enemyPick[index];
        
        if(enemyPick[index] == "Paper" && e.keyCode == '88' || enemyPick[index] == "Scissors" && e.keyCode == '67' || enemyPick[index] == "Rock" && e.keyCode == '90')
        {
            result.innerHTML = "Player win!";
            score ++;
        }
        else if(choice[index] == e.keyCode)
        {
            result.innerHTML = "Draw!";
            mytry --;
            
        }
        else
        {
            result.innerHTML = "Player Lose!";
            
        }

        const keys = Array.from(document.querySelectorAll('.key'));
        keys.forEach(key => key.addEventListener('transitionend', removeTransition));


        mytry++;
        myScore.innerHTML = "Your current score: " + score;
        alertmsg.innerHTML= "Number of tries:" + mytry;

        if(mytry > 10)
        {
            alertmsg.innerHTML = "You are out of tries";
            myScore.innerHTML = "";
            enemy.innerHTML = "";
            playerPick.innerHTML = "";
            result.innerHTML = "Please refresh your browser to play again";
            console.log("Out of tries");
        }
        
    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
      }
   
    
   
    window.addEventListener('keydown', whoWin);

   



