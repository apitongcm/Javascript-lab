const enemy = document.getElementById('enemy');
const playerPick = document.getElementById("showkey");
const result = document.getElementById("result");
const myScore = document.getElementById("score");
const alertmsg = document.getElementById("notice");
const playerImage = document.getElementById("heroImg");
const enemyImage = document.getElementById("enemyImg");

let score = 0;
let mytry = 10;




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
                playerImage.style.background = "url('https://images.unsplash.com/photo-1526814642650-e274fe637fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')";
            }
            else if(e.keyCode == '90')
            {
                playerPick.innerHTML = "Paper";
                key.classList.add('playing');
                playerImage.style.background = "url('https://images.unsplash.com/photo-1532153955177-f59af40d6472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')";
            }
            else
            {
                playerPick.innerHTML = "Rock";
                key.classList.add('playing');
                playerImage.style.background = "url('https://images.unsplash.com/photo-1597857194715-8935b219f6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')";
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
        const enemyPic = ["url('https://images.unsplash.com/photo-1532153955177-f59af40d6472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')",
        "url('https://images.unsplash.com/photo-1526814642650-e274fe637fe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        "url('https://images.unsplash.com/photo-1597857194715-8935b219f6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80')"];
        const index = Math.floor(Math.random() * 3); 
        
        enemy.innerHTML = enemyPick[index];
        enemyImage.style.background = enemyPic[index];
        
        if(enemyPick[index] == "Paper" && e.keyCode == '88' || enemyPick[index] == "Scissors" && e.keyCode == '67' || enemyPick[index] == "Rock" && e.keyCode == '90')
        {
            result.innerHTML = "Player win!";
            score ++;
        }
        else if(choice[index] == e.keyCode)
        {
            result.innerHTML = "Draw!";
            mytry ++;
            
        }
        else
        {
            result.innerHTML = "Player Lose!";
            
        }

        const keys = Array.from(document.querySelectorAll('.key'));
        keys.forEach(key => key.addEventListener('transitionend', removeTransition));


        mytry--;
        myScore.innerHTML = "Your current score: " + score;
        alertmsg.innerHTML= "Number of tries left:" + mytry;

        if(mytry <= 0)
        {
            alertmsg.innerHTML = "You are out of tries";
            myScore.innerHTML = "";
            enemy.innerHTML = "";
            playerPick.innerHTML = "";
            playerImage.style.background="black";
            enemyImage.style.background="black";
            result.innerHTML = "Press f5 to play again!";
            console.log("Out of tries");
            return score;

        }
        
    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
      }
   
    
   
    window.addEventListener('keydown', whoWin);

   



