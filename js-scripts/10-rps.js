      
      let score = JSON.parse(localStorage.getItem('score')) ||{
        wins: 0,
        lossess:0,   
        ties:0      //same as below code vvvvVVVVVvvvv
      }; 

      function updateScore(){
        document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.lossess}, Ties: ${score.ties}`;
      };
      updateScore();
      /*
      differnece between null and undefined
       null = intentionnaly wants something to be empty
       undefined can get different values 


      nothing in Local Storage it gives NULL value

      if(score===null)  //SHORTCUT-  !score 
        {
          score={
            wins: 0,
            lossess: 0,
            ties: 0
          };
        }

      const score= {    //object creation 
        wins: 0,
        lossess:0,
        ties:0
      }
      console.log(JSON.parse(localStorage.getItem('score'))); 
      */
      function playGame(playerMove) //passing parameters in this 
      {
        const computerMove = pickComputerMove();
        let result = '';
        if(playerMove==='Rock')
          {
            if(computerMove==='Rock')
          {
            result=`It's a Tie!`;
          }else if(computerMove==='Paper')
          {
            result=`You Lost`;
          }else if(computerMove==='Scissors')
          {
            result=`You Won`;
          }
          }else if(playerMove==='Paper')
          {
            if(computerMove==='Rock')
            {
              result=`You Won`;
            }else if(computerMove==='Paper')
            {
              result=`It's a Tie!`;
            }else if(computerMove==='Scissors')
            {
              result=`You Lost`;
            }
          }else if(playerMove==='Scissors')
          {      
            if(computerMove==='Rock')
            {
              result=`You Lost`;
            }else if(computerMove==='Paper')
            {
              result=`You Won`;
            }else if(computerMove==='Scissors')
            {
              result=`It's a Tie!`;
            }          
          }
          if (result==='You Won'){
              score.wins=score.wins+1;
            }else if (result==='You Lost'){
              score.lossess=score.lossess+1;
            }else if (result===`It's a Tie!`){
              score.ties=score.ties+1;
            }
            
            localStorage.setItem('score', JSON.stringify(score));  
            //local storage only supports STRINGS ''
            
            updateScore();

/*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}Wins: ${score.wins}, Losses: ${score.lossess}, Ties: ${score.ties}`); */

           
        document.querySelector('.js-result').innerHTML=`${result} `;  
        document.querySelector('.js-moves').innerHTML=` You Move-
        <img src ="images/${playerMove}-emoji.png"
        class="emoji">        
         | Computer Move- 
         <img src ="images/${computerMove}-emoji.png"  
         class="emoji">`;
        }
        


      // let computerMove='';   //global variable
      function pickComputerMove(){
        let computerMove='';
        randomNumber=Math.random();
      if(randomNumber>=0 && randomNumber<1/3)
      {
        computerMove='Rock';
      }else if(randomNumber>=1/3 && randomNumber<2/3)
      {
        computerMove='Paper';
      }else if(randomNumber>=2/3 && randomNumber<1)
      {
        computerMove='Scissors';
      }
      console.log(computerMove);
      return computerMove;  //return value
                //to return a value for the function   
               //assign a value, variable, or function
              // returns end the code and nothing runs after return statment
     
      
    }
   