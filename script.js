
//OpeningCeremony() starts here

function OpeningCeremony(point, callbackFnc) {
    setTimeout(() => {
        console.log("Lets start the game");
        Race100M(point, callbackFnc);
    }, 1000);
}

//Race100M() starts here


function Race100M(point, callbackFnc) {
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

    point[winners[0]] += 50;
    point[winners[1]] += 25;

    console.log(`Race 100M winner is ${winners[0]} with ${times[winners[0]]} seconds`);
    console.log(`New points: ${JSON.stringify(point)}`);

    callbackFnc(point, LongJump);
}

//LongJump() starts here


function LongJump(point, callbackFnc) {
    console.log("Long Jump starts now");
    const colors = ["red", "yellow", "blue", "green"];
    const chosenColor = colors[Math.floor(Math.random() * 4)];
    point[chosenColor] += 150;

    console.log(`${chosenColor} wins Long Jump`);
    console.log(`New points: ${JSON.stringify(point)}`);

    callbackFnc(point, HighJump);
}

////HighJump() starts here


function HighJump(point) {
    console.log("High Jump starts now");

    const result = prompt("What colour secured the highest jump?");
    let color;
    if (result) {
        color = result.toLowerCase();
    }

    if (color === "red" || color === "yellow" || color === "blue" || color === "green") {
        point[color] += 100;
    } else if (result === null) {
        console.log("Event was cancelled");
    } else {
        console.log("Invalid color entered, no points awarded");
    }

    console.log(`New points: ${JSON.stringify(point)}`);
    AwardCeremony(point);
}

//AwardCeremony() starts here

function AwardCeremony(point) {

    console.log(`Award Ceremony`);
    
    let sortedpoints = Object.keys(point).sort((a, b) => point[b] - point[a]);

    console.log(`1st Place: ${sortedpoints[0]} with ${point[sortedpoints[0]]} points`);
    console.log(`2nd Place: ${sortedpoints[1]} with ${point[sortedpoints[1]]} points`);
    console.log(`3rd Place: ${sortedpoints[2]} with ${point[sortedpoints[2]]} points`);
}

OpeningCeremony({ red: 0, blue: 0, green: 0, yellow: 0 }, Race100M);
