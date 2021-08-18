// function genPin() {
//     let tmpPin = Math.round(Math.random() * 10000);
//     tmpPin = tmpPin + '';
//     if (tmpPin.length < 4)
//         genPin();
//     return parseInt(tmpPin);
// }

const displayPin = document.getElementById('display-pin');
const testDisplay = document.getElementById('test-display');
document.getElementById('generate-pin').addEventListener('click', function () {
    // const pin = genPin();
    const pin = Math.floor(1000 + Math.random() * 9000);
    displayPin.value = pin;
})

document.getElementById('key-pad').addEventListener('click', function (event) {
    const keyBtn = event.target.innerText;
    if (keyBtn >= 0 && keyBtn <= 9) {
        console.log(keyBtn);
        testDisplay.value += keyBtn;
    }
    else if (keyBtn == 'C')
        testDisplay.value = '';
    else if (keyBtn == '<') {
        let tmpString = testDisplay.value;
        if (tmpString.length > 0) {
            tmpString = tmpString.slice(0, -1);
            testDisplay.value = tmpString;
        }
    }
})

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function () {
    if (displayPin.value == testDisplay.value && testDisplay.value && displayPin.value) {
        document.getElementById('match-success').style.display = "block";
        document.getElementById('match-fail').style.display = "none";
    }
    else if (displayPin.value != testDisplay.value) {
        document.getElementById('match-fail').style.display = "block";
        document.getElementById('match-success').style.display = "none";
    }
})

