
  gigya.accounts.addEventHandlers({ onLogin: onAfterSubmitHandler()});
  
  
 function onAfterSubmitHandler(responseObj){
   alert('You are now logged in');
//console.log(responseObj.response.requestParams+ "\r\n");
 
}
