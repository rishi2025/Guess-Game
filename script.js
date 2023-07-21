'use strict';

let num = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.subs').textContent = 20;
document.querySelector('.hsubs').textContent = 0;
let currScore = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.In').value);

    if (!guess) {
        document.querySelector('.instructions').textContent = '❌ No Number found';
    }

    else if (guess === num) {
        document.querySelector('.instructions').textContent = '🥳🎉 Correct Number';
        let val = document.querySelector('.hsubs').textContent;
        if (val < currScore) {
            document.querySelector('.instructions').textContent = '🥳🎉 Correct Number';
            document.querySelector('.hsubs').textContent = currScore;
        }
        document.querySelector('.answer').textContent = num;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.answer').style.width = '50%';
        document.querySelector('.instructions').style.backgroundColor = '#60b347';
        document.querySelector('.In').style.backgroundColor = '#60b347';
        document.querySelector('.score').style.backgroundColor = '#60b347';
        document.querySelector('.hscore').style.backgroundColor = '#60b347';
        document.querySelector('.tempInstructions').style.backgroundColor = '#60b347';
    }

    else if (guess > num) {
        if (currScore > 1) {
            document.querySelector('.instructions').textContent = '⤴️ Too High';
            currScore--;
            document.querySelector('.subs').textContent = currScore;
        }
        else {
            document.querySelector('.instructions').textContent = '🥹 You Lost';
            document.querySelector('.answer').textContent = num;
            document.querySelector('body').style.backgroundColor = '#FF6969';
            document.querySelector('.answer').style.width = '50%';
            document.querySelector('.instructions').style.backgroundColor = '#FF6969';
            document.querySelector('.In').style.backgroundColor = '#FF6969';
            document.querySelector('.score').style.backgroundColor = '#FF6969';
            document.querySelector('.hscore').style.backgroundColor = '#FF6969';
            document.querySelector('.tempInstructions').style.backgroundColor = '#FF6969';
        }
    }

    else {
        if (currScore > 1) {
            document.querySelector('.instructions').textContent = '⤵️ Too Low';
            currScore--;
            document.querySelector('.subs').textContent = currScore;
        }
        else {
            document.querySelector('.instructions').textContent = '🥹 You Lost';
            document.querySelector('.answer').textContent = num;
            document.querySelector('body').style.backgroundColor = '#FF6969';
            document.querySelector('.answer').style.width = '50%';
            document.querySelector('.instructions').style.backgroundColor = '#FF6969';
            document.querySelector('.In').style.backgroundColor = '#FF6969';
            document.querySelector('.score').style.backgroundColor = '#FF6969';
            document.querySelector('.hscore').style.backgroundColor = '#FF6969';
            document.querySelector('.tempInstructions').style.backgroundColor = '#FF6969';
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector(".In").value = "";
    console.log("Hello");
    num = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.subs').textContent = 20;
    currScore = 20;
    document.querySelector('.instructions').textContent = '✨ Start Guessing...';
    document.querySelector('.answer').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#252020';
    document.querySelector('.answer').style.width = '20%';
    document.querySelector('.instructions').style.backgroundColor = '#252020';
    document.querySelector('.In').style.backgroundColor = '#252020';
    document.querySelector('.score').style.backgroundColor = '#252020';
    document.querySelector('.hscore').style.backgroundColor = '#252020';
    document.querySelector('.tempInstructions').style.backgroundColor = '#252020';
})
