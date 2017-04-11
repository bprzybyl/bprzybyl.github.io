/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();
var board = {};
var cards = {};

t.render(function(){
  // this function we be called once on initial load
  // and then called each time something changes that
  // you might want to react to, such as new data being
  // stored with t.set()
});

function getBoard() {
  t.board('id', 'name', 'url', 'shortLink', 'members') 
    .then(function(promiseResult) {
      board = promiseResult;
      console.log(board);
    $.getJson(board.url + ".json").done(function(data) {
      console.log(data);
    });
      debugger;
  });
}

function getCards() {  
  t.cards('id', 'name', 'desc', 'due', 'closed', 'cover', 'attachments', 'members', 'labels', 'url', 'shortLink', 'idList', 'idShort') 
    .then(function(promiseResult) {
    cards = promiseResult
      console.log(cards);
      debugger;
  });  
}
