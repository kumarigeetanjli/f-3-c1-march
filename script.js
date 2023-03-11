function OpeningCeremony(score, callbackFnc) {
    setTimeout(() => {
      console.log("Let the games begin");
      Race100M(score, callbackFnc);
    }, 1000);
  }
  
  function Race100M(score, callbackFnc) {
    console.log("Race 100M starts now");
    const redTime = Math.floor(Math.random() * 6) + 10;
    const yellowTime = Math.floor(Math.random() * 6) + 10;
    const blueTime = Math.floor(Math.random() * 6) + 10;
    const greenTime = Math.floor(Math.random() * 6) + 10;
  
    let times = {
      red: redTime,
      yellow: yellowTime,
      blue: blueTime,
      green: greenTime,
    };
  
    let winners = Object.keys(times).sort((a, b) => times[a] - times[b]);
  
    score[winners[0]] += 50;
    score[winners[1]] += 25;
  
    console.log(`Race 100M winner is ${winners[0]} with ${times[winners[0]]} seconds`);
    console.log(`New Scores: ${JSON.stringify(score)}`);
  
    callbackFnc(score, LongJump);
  }
  
  function LongJump(score, callbackFnc) {
    console.log("Long Jump starts now");
    const colors = ["red", "yellow", "blue", "green"];
    const chosenColor = colors[Math.floor(Math.random() * 4)];
    score[chosenColor] += 150;
  
    console.log(`${chosenColor} wins Long Jump`);
    console.log(`New Scores: ${JSON.stringify(score)}`);
  
    callbackFnc(score, HighJump);
  }
  
  function HighJump(score) {
    console.log("High Jump starts now");
  
    const answer = prompt("What colour secured the highest jump?");
    let color;
    if (answer) {
      color = answer.toLowerCase();
    }
  
    if (color === "red" || color === "yellow" || color === "blue" || color === "green") {
      score[color] += 100;
    } else if (answer === null) {
      console.log("Event was cancelled");
    } else {
      console.log("Invalid color entered, no points awarded");
    }
  
    console.log(`New Scores: ${JSON.stringify(score)}`);
    AwardCeremony(score);
  }
  
  function AwardCeremony(score) {
    console.log(`Award Ceremony`);
    let sortedScores = Object.keys(score).sort((a, b) => score[b] - score[a]);
  
    console.log(`1st Place: ${sortedScores[0]} with ${score[sortedScores[0]]} points`);
    console.log(`2nd Place: ${sortedScores[1]} with ${score[sortedScores[1]]} points`);
    console.log(`3rd Place: ${sortedScores[2]} with ${score[sortedScores[2]]} points`);
  }
  
  OpeningCeremony({ red: 0, blue: 0, green: 0, yellow: 0 }, Race100M);
  