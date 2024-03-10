let score={
  win:0,
  lose:0,
  tie:0,
};

let ComputerInput=' ';
function fn(){
  let randomvalue=Math.random();
  let ComputerInput=' ';
  let resultscore=' ';
  console.log(randomvalue);
     
    if(randomvalue>=0 && randomvalue<1/3){
        ComputerInput='Rock';
    }
    else if(randomvalue>=1/3 && randomvalue<2/3){
      ComputerInput='Paper';
    }
    else{
      ComputerInput='Scissor';
    }
    return (ComputerInput);
}
function playGame(playerChoice){
  ComputerInput=fn();
    if(playerChoice=='Rock'){
      if(ComputerInput==='Rock'){
      result='Tie';
    }
    else if(ComputerInput==='Paper'){
      result='You Lose';
    }
    else{
      result='you Win';
    }
  }
  else if(playerChoice=='Paper'){
    if(ComputerInput==='Rock'){
    result='You Win';
    }
    else if(ComputerInput==='Paper'){
      result='Tie';
    }
    else{
      result='You Lose';
    }
  }
    else if(playerChoice=='Scissors'){
    if(ComputerInput==='Rock'){
      result='you Lose';
    }
    else if(ComputerInput==='Paper'){
      result='You Win';
    }
    else{
      result='Tie';
    }
  }
  if(result=='You Win'){
    //Score.win=SCore.win+1;
    score.win+=1;
  }
  else if(result=='you Lose'){
     //Score.lose=sCore.lose+1;
    score.lose+=1;
  }
  else if(result=='Tie'){
   //Score.tie=SCore.tie+1;
   score.tie+=1;
  }
  document.getElementById("winspan").innerHTML=score.win;
  document.getElementById("losespan").innerHTML=score.lose;
  document.getElementById("tiespan").innerHTML=score.tie;
  document.getElementById("playerh1").innerHTML=playerChoice;
  document.getElementById("computerh1").innerHTML=ComputerInput;
  document.getElementById("resulttext").innerHTML=result;
}
function reset(){
  score.win=0;
  score.lose=0;
  score.tie=0;
  document.getElementById("winspan").innerHTML=score.win; 
  document.getElementById("losespan").innerHTML=score.lose;
  document.getElementById("tiespan").innerHTML=score.tie;
}
 
  
  

