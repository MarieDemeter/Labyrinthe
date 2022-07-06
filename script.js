const plateau = [["S", "X", "_", "_", "_", "_", "_"], ["_", "X", "_", "X", "X", "_", "X"], ["_", "X", "_", "X", "G", "_", "_"], ["_", "_", "_", "_", "X", "X", "_"], ["_", "X", "_", "X", "_", "_", "_"], ["_", "X", "_", "_", "_", "X", "_"]];


let x = 0;
let y = 0;

let fil = [];
//fil.push([0, 0]);
let position = [0];

console.table(plateau);

choosePosition(position, x, y, plateau, fil);



function choosePosition(position, x, y, plateau, fil) {
    while (plateau[y][x] != "G") {

        let myPosition = position[position.length - 1];
        let hightPosition = Math.max(...position);

        console.log("hightPosition ======", hightPosition);
        console.log("position ***********************", myPosition);
        console.table(fil);

        if (down(plateau, x, y, '_') && !alreadyPass(fil, x, y + 1)) {

            y = y + 1;

            console.log("------------------------------------------------------------");
            addNewPosition(plateau, position, fil, x, y, hightPosition);
            print(plateau);
            console.table(position);

        } else if (right(plateau, x, y, '_') && !alreadyPass(fil, x + 1, y)) {

            x = x + 1;

            console.log("------------------------------------------------------------");
            addNewPosition(plateau, position, fil, x, y, hightPosition);
            print(plateau);
            console.table(position);

        } else if (up(plateau, x, y, '_') && !alreadyPass(fil, x, y - 1)) {

            y = y - 1;

            console.log("------------------------------------------------------------");
            addNewPosition(plateau, position, fil, x, y, hightPosition);
            print(plateau);
            console.table(position);

        } else if (left(plateau, x, y, '_') && !alreadyPass(fil, x - 1, y)) {

            x = x - 1;

            console.log("------------------------------------------------------------");
            addNewPosition(plateau, position, fil, x, y, hightPosition);
            print(plateau);
            console.table(position);

        } else {

            console.log("hightPosition ======", hightPosition);
            console.log("position ***********************", myPosition);


            let i = 1;
            console.log("*****************************************************************************************************");


            if (down(plateau, x, y, (myPosition - i).toString()) || right(plateau, x, y, (myPosition - i).toString()) || up(plateau, x, y, (myPosition - i).toString()) || left(plateau, x, y, (myPosition - i).toString())) {
                i++;                
            }

            myPosition = myPosition - i;
            position.push(myPosition);


            console.log(i, "iiiiiiiiiiiiiii")
            y = fil[myPosition][0];
            x = fil[myPosition][1];

            choosePosition(position, x, y, plateau, fil);
            print(plateau);
            console.table(fil);



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
    hightPosition++;
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

function down(plateau, x, y, value) {
    return (y + 1 < plateau.length && plateau[y + 1][x] == value);
}

function right(plateau, x, y, value) {
    return (x + 1 < plateau[y].length && plateau[y][x + 1] == value);
}

function up(plateau, x, y, value) {
    return (y - 1 >= 0 && plateau[y - 1][x] == value);
}

function left(plateau, x, y, value) {
    return (x - 1 >= 0 && plateau[y][x - 1] == value);
}