'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Money Tracking APP

// Data
const account1 = {
  owner: 'Zaheer Khan',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: "1111",
};

const account2 = {
  owner: 'Fareed Khan',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1,
  pin: "2222",
};

const account3 = {
  owner: 'Aman Shaikh',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: "3333",
};

const account4 = {
  owner: 'Shadman Shaikh',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: "4444",
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((move, i) => {
    const type = move > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
                  <div class="movements__type movements__type--${type}"> ${i} ${type}</div>
                  <div class="movements__date">3 days ago</div>
                  <div class="movements__value">${Math.abs(move)} RS</div>
                </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const addDisplayMoney = function (movements) {
  const displayMoney = movements.reduce(function (acc, move) {
    return acc + move;
  });

  labelBalance.innerHTML = displayMoney + ' RS';
};

addDisplayMoney(account1.movements);

// login function

let mainApp = document.getElementById("main-app");
mainApp.style.display = "none";

function login() {
    var enteredPin = document.getElementById('pin').value;
    const isPinMatched = accounts.some(account => account.pin === enteredPin);
    const pinIinputField = document.getElementById('pin');
    
    if (!enteredPin) {
        pinIinputField.setCustomValidity('Please enter a PIN.');
        pinIinputField.reportValidity();
    } else if (isPinMatched) {
        pinIinputField.setCustomValidity('');
        pinIinputField.reportValidity();
        var loginCard = document.getElementById("login-card");
        loginCard.style.display = "none";
        mainApp.style.display = "grid";
    } else {
        pinIinputField.setCustomValidity('Incorrect PIN');
        pinIinputField.reportValidity();
    }
}

// const sapLogin = document.querySelector('.gigya-input-submit');

// sapLogin.addEventListener("click", () => {
//   console.log('Inside submit button')
//   mainApp.style.display = "visible";
// })
const closeLogin = () => {
  alert('Hello');
  mainApp.style.display = "grid";
}

gigya.accounts.addEventHandlers({
            onLogin: closeLogin()
});


/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// // Challenge

// const checkDogs = function (arr1, arr2) {
//   const [...onlyDogsJulia] = arr1.slice(2, arr1.length);
//   // console.log(onlyDogsJulia);

//   const totalDOgs = onlyDogsJulia.concat(arr2);
//   console.log(totalDOgs);

//   totalDOgs.forEach((age, i) => {
//     if (age >= 3) {
//       console.log('====================================');
//       console.log(`Dog number ${i} is an adult and is ${age} years old`);
//       console.log('====================================');
//     } else {
//       console.log('====================================');
//       console.log(`Dog number ${i} is still puppy 🐶`);
//       console.log('====================================');
//     }
//   });
// };

// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

// checkDogs(julia, kate);
