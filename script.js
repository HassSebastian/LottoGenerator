let numbers = [];
let numbersResalt = [];
let result;
let weeks;


const init = async () => {
    await fillNumbers();
}


const fillNumbers = () => {
    for (let i = 1; i < 50; i++) {
        numbers.push(i);
    }
}


const calculate = async () => {
    numbersResalt = [];
    for (let i = 0; i < weeks; i++) {
        for (let x = 0; x < 7; x++) {
            randomNumber();
            numbers.splice(result, 1);
            if (numbersResalt[result]) {
                numbersResalt[result]++;
            } else {
                numbersResalt[result] = 1;
            }
            numbers = [];
            fillNumbers();
        }
    }
    sixNumbers();
}


const randomNumber = () => {
    let num = Math.floor(Math.random() * numbers.length) + 1;
    return result = num;
}


const sixNumbers = () => {
    const topSixIndexes = numbersResalt.map((value, index) => [value, index])
        .sort((a, b) => b[0] - a[0])
        .slice(0, 6)
        .map((value) => value[1]);
    finishCalculation(topSixIndexes);
}

const buttonSelect = (x) => {
    let higlite = document.querySelectorAll('[id*="defWeeks"]');
    higlite.forEach((defWeeks) => { document.getElementById(defWeeks.id).style = "background-color:none" });
    document.getElementById(`defWeeks${x}`).style = "background-color:rgba(0,0,0,.2)";
    weeks = x;
}

const finishCalculation = (topSixIndexes) => {
    document.getElementById('circle0').innerHTML = `${topSixIndexes[0]}`;
    document.getElementById('circle1').innerHTML = `${topSixIndexes[1]}`;
    document.getElementById('circle2').innerHTML = `${topSixIndexes[2]}`;
    document.getElementById('circle3').innerHTML = `${topSixIndexes[3]}`;
    document.getElementById('circle4').innerHTML = `${topSixIndexes[4]}`;
    document.getElementById('circle5').innerHTML = `${topSixIndexes[5]}`;
}

