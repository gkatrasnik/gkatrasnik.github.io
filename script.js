

  //global variables 
    var userScore =0;
    var compScore = 0;

  //button functions
  document.getElementById("rock").onclick = setPlayerPick;
  document.getElementById("paper").onclick = setPlayerPick; 
  document.getElementById("scisors").onclick = setPlayerPick;

  function setPlayerPick() {
    let playerPick = this.id;
    console.log("Playerpick:",playerPick);

    // ko ti klikneš, se mora zagnat tud computerPlay funkcija, da računalnik zbere... 
    let computerPick = computerPlay();

    // ko imaš obe spremenljivki (računalnikova izbira + tvoja, rabiš da se zažene primerjava)
    let whoWon = playRound(playerPick, computerPick);
    document.getElementById("winner").textContent =  whoWon + " wins this round!";

    if (whoWon === "Player") {
      userScore += 1;
    } else if (whoWon === "Computer") {
      compScore += 1;
    }

    console.log(userScore, compScore);

    updateScore();

    if (userScore >= 5 || compScore >= 5) {
      gameEnd();
    };

  }    

  function updateScore() {
    document.getElementById("userScore").textContent = userScore;
    document.getElementById("compScore").textContent = compScore;
  }

  function gameEnd() {
    if (userScore>compScore){
      document.getElementById("winner").textContent = "Player Won " + userScore + " : " + compScore;
    } else if (userScore<compScore){      
      document.getElementById("winner").textContent = "Computer Won " + userScore + " : " + compScore;
    }
    userScore =0;
    compScore = 0;
    updateScore();
  }


  function computerPlay() {
   // random computer pick
    const compPick = ["rock", "paper", "scisors"];

    const random = Math.floor(Math.random() * compPick.length);
    finalCompPick = (compPick[random]);
    console.log("Computerpick:", finalCompPick)
    return finalCompPick;
  }

  
  // Plays a round - compares computerPlay vs playerSelection. returns winner. 

  //  to bi js mrbet tud dav nekak gor, k klikneš, da zbere tvoje, pol komputer zbere, in oba rezultata da v tole funckcijo... in pol jih primerja.
  
  // da daš tuki notr playerPick, in computerPick) 
  function playRound(playerPick, computerPick) {
    const ps = playerPick; // in po gre v to variablo
    const cp = computerPick;   // in v to...
    let winner = "";

    // tuki primerja
    if (ps=="rock" && cp=="scisors") {
      winner ="Player";
      
    } else if (ps=="paper" && cp=="scisors") {
        winner ="Computer";
        
    } else if (ps=="paper" && cp=="rock") {
        winner ="Player";
        
    } else if (ps=="scisors" && cp=="rock") {
        winner ="Computer";
        
    } else if (ps=="rock" && cp=="paper") {
        winner ="Computer";
        
    } else if (ps=="scisors" && cp=="paper") {
        winner ="Player";
        
    } else {
        winner ="Nobody";
    }    
    return winner;    
  }
  
  
