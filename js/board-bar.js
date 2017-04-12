/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();
var board = {};
var cards = {};
var jsonData = {};

t.render(function(){
  // this function we be called once on initial load
  // and then called each time something changes that
  // you might want to react to, such as new data being
  // stored with t.set()
});

function authorizeUser() {
  $.ajax({
    url: 'https://trello.com/b/sPYLhDVX/test-board-4.json',
    dataType: 'JSONP',
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Bearer $token")
    },
    success: function(data){
      console.log(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });  
  
//   Trello.authorize({
//     type: 'popup',
//     name: 'Powerup Authorization',
//     scope: {
//       read: 'true',
//       write: 'true' },
//     expiration: 'never',
//     success: authenticationSuccess,
//     error: authenticationFailure
//   });  
}

// var authenticationSuccess = function() { console.log('Successful authentication'); };

// var authenticationFailure = function() { console.log('Failed authentication'); };

function getBoard() {
  t.board('id', 'name', 'url', 'shortLink', 'members') 
    .then(function(promiseResult) {
      board = promiseResult;
      console.log(board);
    var jsonURL = board.url + ".json";
    $.getJSON(jsonURL, function(data) {
      console.log("hey");
      console.log(data);
      jsonData = data;
    });
  });
}

function getCards() {  
  t.cards('id', 'name', 'desc', 'due', 'closed', 'cover', 'attachments', 'members', 'labels', 'url', 'shortLink', 'idList', 'idShort') 
    .then(function(promiseResult) {
    cards = promiseResult
      console.log(cards);
  });  
}
