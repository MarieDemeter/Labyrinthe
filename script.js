const plateau = [["S", "X", "_", "_", "_", "_", "_"], ["_", "X", "_", "X", "X", "_", "X"], ["_", "X", "_", "X", "G", "_", "_"], ["_", "_", "_", "_", "X", "X", "_"], ["_", "X", "_", "X", "_", "_", "_"], ["_", "X", "_", "_", "_", "X", "_"]];


let x = 0;
let y = 0;

let fil = [];
//fil.push([0, 0]);
let position = [0];

console.table(plateau);

choosePosition(position, x, y, plateau, fil);



function choosePosition(position, x, y, plateau, fil) {
    let myPosition = position[position.length - 1];
    while (plateau[y][x] != "G") {
        let hightPosition = Math.max(...position);

        console.log("hightPosition ======", hightPosition);
        console.log("position ***********************", myPosition);
        console.table(fil);

        if (down(plateau, fil, x,y)) {
            
            y = y + 1;

            console.log("------------------------------------------------------------");
            addNewPosition(plateau, position, fil, x, y, hightPosition);
            print(plateau);
            console.table(position);

        } else if (right(plateau, fil, x,y)) {
            
            x = x + 1;

            console.log("------------------------------------------------------------");
            addNewPosition(plateau, position, fil, x, y, hightPosition);
            print(plateau);
            console.table(position);

        } else if (up(plateau, fil, x,y)) {
            
            y = y - 1;

            console.log("------------------------------------------------------------");
            addNewPosition(plateau, position, fil, x, y, hightPosition);
            print(plateau);
            console.table(position);

        } else if (left(plateau, fil, x,y)) {
            
            x = x - 1;

            console.log("------------------------------------------------------------");
            addNewPosition(plateau, position, fil, x, y, hightPosition);
            print(plateau);
            console.table(position);

        } else {

            oldPosition;

            console.log("hightPosition ======", hightPosition);
            console.log("position ***********************", myPosition);
            console.log("oldPosition ***********************", oldPosition);

            y = fil[oldPosition][0];
            x = fil[oldPosition][1];
            print(plateau);
            console.table(fil);

            choosePosition(position, x, y, plateau, fil);

        }
    }
}







function alreadyPass(fil, x, y) {
    for (let i = 0; i < fil.length; i++) {
        if (fil[i][0] == y && fil[i][1] == x) {
            return true;
        };
    }
    return false;
}

function addNewPosition(plateau, position, fil, x, y, hightPosition) {
    fil.push([y, x]);
    position.push(hightPosition);
    plateau[y][x] = hightPosition;
}

function print(plateau) {
    /*    let copyTab = [].concat(plateau);
        copyTab[y][x] = "0";
        console.table(copyTab);
        copyTab[y][x] = "_";
    */
    console.table(plateau);
}

function down(plateau, fil, x,y){
    return (y + 1 < plateau.length && plateau[y + 1][x] == "_" && !alreadyPass(fil, x, y + 1))
}

function right(plateau, fil, x,y){
    return (y + 1 < plateau.length && plateau[y + 1][x] == "_" && !alreadyPass(fil, x, y + 1))
}

function up(plateau, fil, x,y){
    return (y + 1 < plateau.length && plateau[y + 1][x] == "_" && !alreadyPass(fil, x, y + 1))
}

function left(plateau, fil, x,y){
    return (y + 1 < plateau.length && plateau[y + 1][x] == "_" && !alreadyPass(fil, x, y + 1))
}