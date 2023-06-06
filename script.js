'use strict';

const loginCard = document.getElementById('login-card');
const login = document.getElementById('login');
const logout = document.getElementById('logout');
const register = document.getElementById('register');
const welcome = document.querySelector('.welcome');
const logouttext = document.querySelector('.logouttext');

function onAfterSubmitHandler(responseObj){
   alert('You are now logged in');
//console.log(responseObj.response.requestParams+ "\r\n");
 
}

login.addEventListener('click', () => {


  var params = {
    'screenSet': 'Default-RegistrationLogin',
  'startScreen':'gigya-login-screen'
  };
  gigya.accounts.showScreenSet(params);
})

register.addEventListener('click', () => {

  var customLangParams = {
    'this_field_is_required' : '%fieldname'
  };
  var params = {
    'screenSet': 'Default-RegistrationLogin',
    'customLang': customLangParams,
  'startScreen':'MySite-Registration'
  };
  gigya.accounts.showScreenSet(params);
})


gigya.accounts.addEventHandlers({
  onLogin: function(event) {
    // Handle the login event
    console.log("User logged in");

    logout.classList.remove('hidden');
    register.classList.add('hidden');
    login.classList.add('hidden');
    welcome.textContent = "Hello, You are logged in!";
     logouttext.textContent = "You are logged in!";
    
  },
  onLogout: function(event) {
    // Handle the logout event
    console.log("User logged out");
    logout.classList.add('hidden');
    register.classList.remove('hidden');
    login.classList.remove('hidden');
     logouttext.textContent = "Click <b>Login | Register</b> to begin";
  }
  // Add more event handlers as needed
});

function onLogout(response) {
if ( response.errorCode == 0 ) {
alert('You are now logged out');
}
else {
alert('Error :' + response.errorMessage);
}
}
  
