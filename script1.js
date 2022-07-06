const plateau = [["S", "X", "_", "_", "_", "_", "_"], ["_", "X", "_", "X", "X", "_", "X"], ["_", "X", "_", "X", "G", "_", "_"], ["_", "_", "_", "_", "X", "X", "_"], ["_", "X", "_", "X", "_", "_", "_"], ["_", "X", "_", "_", "_", "X", "_"]];


let x = 0;
let y = 0;

let position = plateau[x][y];
let fil = [{x:0,y:0}];

console.table(plateau);
console.log("Ma position est =", position);
console.table(fil);




function testDirection(plateau, fil, x, y, direction) {

    let positionTestee;
    let xTest;
    let yTest;

    switch (direction) {
        case "bas":
            if (y + 1 < plateau[x].length) {
                xTest = x;
                yTest = y + 1;
                positionTestee = plateau[x][y + 1];
            }
        case "droite":
            if (y + 1 < plateau.length) {
                xTest = x + 1;
                yTest = y;
                positionTestee = plateau[x + 1][y];
            }
        case "haut":
            if (y - 1 >=0) {
                xTest = x;
                yTest = y - 1;
                positionTestee = plateau[x][y - 1];
            }
        case "gauche":
            if (x- 1 >=0) {
                xTest = x - 1;
                yTest = y;
                positionTestee = plateau[x - 1][y];
            } default:
            console.log("Erreur");
    }


    if (positionTestee == "_" && plateau[xTest][yTest]) {

        return testDirection(plateau, fil, xTest, yTest, "bas");




    } else {
        direction = switchDirection(direction);
        return testDirection(plateau, fil, x, y, direction);
    }

}

function switchDirection(direction) {
    switch (direction) {
        case "bas":
            direction = "droite";
            break;
        case "droite":
            direction = "haut";
            break;
        case "haut":
            direction = "gauche";
            break;
        case "gauche":
            direction = "bas";
            break;
        default:
            console.log("Erreur");
    }
    return direction;
}