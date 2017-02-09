<!--
var authenticationSuccess = function() { console.log('Successful authentication'); };
var authenticationFailure = function() { console.log('Failed authentication'); };

Trello.authorize({
  type: 'popup',
  name: 'Getting Started Application',
  scope: {
    read: 'true',
    write: 'true' },
  expiration: 'never',
  success: authenticationSuccess,
  error: authenticationFailure
});

/*
var myList = "";
$.getJSON("https://trello.com/c/4GZEspnR/2-i-just-created-a-new-card.json", function(out) {
  myList = out.id;
});

var creationSuccess = function(data) {
  console.log('Card created successfully. Data returned:' + JSON.stringify(data));
};

var newCard = {
  name: 'New Test Card', 
  desc: 'This is the description of our new card.',
  // Place this card at the top of our list 
  idList: myList,
  pos: 'top'
};
Trello.post('/cards/', newCard, creationSuccess);-->

*/
