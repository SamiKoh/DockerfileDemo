// Sami Kohvakka, op.nro 0442632
// www-sovellukset, viikko 1 
// 12.9.2018
var rounds = 0;
var arr = [[1,1,2],
           [0,2,2],
           [2,1,1]];
           
function checkRows() {
    let match = false;
    arr.forEach(element => {
        if (element[0] == 0) {
            // empty value in current row
            return;
        }
        else if (element[0] == element[1] &&
            element[1] == element[2]) {
                match = true; 
            }
    });
    return match;
};

function checkColumns() {
   let match = false;
    for (let i = 0; i < arr.length; i++) {
       if (arr[0][i] == arr[1][i] &&
           arr[1][i] == arr[2][i] &&
           arr[0][i] != 0) {
           match = true;
       }
   }
   return match; 
}

function checkDiagonal() {
    let match = false;
    if (arr[0][0] == arr[1][1] &&
        arr[1][1] == arr[2][2] &&
        arr[0][0] != 0) {
        match = true;
    } else if (arr[0][2] == arr[1][1] &&
               arr[1][1] == arr[2][0] &&
               arr[1][1] != 0) {
        match = true;
    }
    return match;
}

function gameResults() {
    let foundStraight = false;
    if (checkRows() || checkColumns() || checkDiagonal()) {
        foundStraight = true;
        console.log("\nStraigth was found.");
    }
    return foundStraight;
}

function play() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let element = document.getElementById("gametable").rows[i].cells[j];
            switch (element.innerHTML){
                case "X":
                    arr[i][j] = 1;
                    break;
                case "O":
                    arr[i][j] = 2;
                    break;
                default:
                    arr[i][j] = 0;
            }
        }    
    }
    console.log(arr);
    return gameResults();
}

let victory = false;
function addMarker(caller) {
    if (!victory){
        let marker = document.getElementById("turn-identifier").innerHTML;
        if (!caller.innerHTML) {
            console.log("Cell is empty, adding marker");
            caller.innerHTML = marker;
            rounds++;
            if(play()) {
                console.log("Victory!");
                alert(marker + " voitti pelin.");
                victory = true;
            } else {
                if (rounds == 9) {
                    alert("Tasapeli!");
                }
                document.getElementById("turn-identifier").innerHTML = marker == "X" ? "O" : "X";
            }
        }
    }
}

function reload() {
    location.reload();
}