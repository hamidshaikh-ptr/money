'use strict';

const loginCard = document.getElementById('login-card');
const login = document.getElementById('login');
const logout = document.getElementById('logout');
const register = document.getElementById('register');
const welcome = document.querySelector('.welcome');

function onAfterSubmitHandler(responseObj){
   alert('You are now logged in');
//console.log(responseObj.response.requestParams+ "\r\n");
 
}

login.addEventListener('click', () => {

  customLangParams = {
    'this_field_is_required' : 'Please enter %fieldname'
  };
  params = {
    'screenSet': 'Default-RegistrationLogin',
    'customLang': customLangParams,
  'startScreen':'gigya-login-screen'
  };
  gigya.accounts.showScreenSet(params);
})


gigya.accounts.addEventHandlers({
  onLogin: function(event) {
    // Handle the login event
    console.log("User logged in");
    console.log("User ID:", event.user.UID);
    console.log("Email:", event.user.email);

    logout.classList.remove('hidden');
    register.classList.add('hidden');
    login.classList.add('hidden');
    welcome.textContent = "Hello, " + event.user.email + "!";
  },
  onLogout: function(event) {
    // Handle the logout event
    console.log("User logged out");
    logout.classList.add('hidden');
    register.classList.remove('hidden');
    login.classList.remove('hidden');
  },
  onRegister: function(event) {
    // Handle the registration event
    console.log("User registered");
    console.log("User ID:", event.user.UID);
    console.log("Email:", event.user.email);

    logout.classList.remove('hidden');
    register.classList.add('hidden');
    login.classList.add('hidden');
  }
  // Add more event handlers as needed
});
  