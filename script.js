'use strict'; //hata yaparsak uyarılmamızı sağlar.

let secretNumber = Math.trunc(Math.random()*20) + 1; // random sayı oluşturduk.
let score = 20; // score oluşturduk
let highscore = 0; // high score oluşturduk.


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    console.log(secretNumber,typeof secretNumber);

    // input eğer boş girilirse

    if (!guess) {
        displayMessage('Bir sayı giriniz');
    }
    
    // sayılar birbiriiyle eşleşirse
    
    else if(guess === secretNumber) {
        displayMessage('Doğru tahmin');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347'; // doğru bilirse arka plan yeşil olur.
        document.querySelector('.number').style.width = '30rem';

        // score , highscore dan büyükse
        if (score > highscore) {
            highscore = score;

            document.querySelector('.highscore').textContent = highscore;
        }


        
    }

    // sayılar birbiriyle eşleşmiyor ise 

    else if(guess !== secretNumber){
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Çok yüksek':'Çok düşük');
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('Oyunu kaybettin');
            document.querySelector('.score').textContent = 0;
        }
    }
    
});


//Oyunu baştan başlattık.

document.querySelector('.again').addEventListener('click',function () {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1; // random sayı oluşturduk.


    displayMessage('Tahmin ediliyor...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = '';

    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.number').style.width = '15rem';

    
});

// id ye erişmek için innerHtml,class a erişmek için querySelector kullanılır.




