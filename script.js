'use strict';
/*
console.log(document.querySelector('.instructions').textContent);
document.querySelector('.instructions').textContent = 'Correct Number 🥳🎉';
document.querySelector('.subs').textContent = 13;
document.querySelector('.answer').textContent = 20;
document.querySelector('.In').value = 20;
*/

// console.log(document.querySelector('.In').textContent);
const num = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.subs').textContent = 20;
document.querySelector('.hsubs').textContent = 0;
let currScore = 20;
// console.log(num);
// console.log(Math.random());

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.In').value);

    if (!guess)
    {
        document.querySelector('.instructions').textContent = '❌ No Number found';
    }

    else if (guess === num)
    {
        document.querySelector('.instructions').textContent = '🥳🎉 Correct Number';
        let val = document.querySelector('.hsubs').textContent;
        if (val < currScore) {
            document.querySelector('.instructions').textContent = '🥳🎉 Correct Number';
            document.querySelector('.hsubs').textContent = currScore;
        }
    }

    else if (guess > num)
    {
        if (currScore > 1) {
            document.querySelector('.instructions').textContent = '⤴️ Too High';
            currScore--;
            document.querySelector('.subs').textContent = currScore;
        }
        else {
            document.querySelector('.instructions').textContent = '🥹 You Lost';
        }
    }

    else
    {
        if (currScore > 1) {
            document.querySelector('.instructions').textContent = '⤵️ Too Low';
            currScore--;
            document.querySelector('.subs').textContent = currScore;
        }
        else {
            document.querySelector('.instructions').textContent = '🥹 You Lost';
        }
    }
})