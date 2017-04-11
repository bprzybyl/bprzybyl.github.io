/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

t.render(function(){
  // this function we be called once on initial load
  // and then called each time something changes that
  // you might want to react to, such as new data being
  // stored with t.set()
});

function myFunction() {
  t.board('id', 'name', 'url', 'shortLink', 'members') 
    .then(function(promiseResult) {
      console.log(promiseResult);
  });  
  
  t.cards('id', 'name', 'desc', 'due', 'closed', 'cover', 'attachments', 'members', 'labels', 'url', 'shortLink', 'idList', 'idShort') 
    .then(function(promiseResult) {
      console.log(promiseResult);
  });  
}
