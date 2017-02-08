TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
    icon: './images/Trane_logo_crop.png',
    text: 'Trane',
    callback: function(t){
      alert(Trello.get('/member/me/boards', success, error));
    }}];
  },
  'show-settings': function(t, options){
    return t.popup({
      title: 'Settings',
      url: './settings.html',
      height: 184
    });
  }
});

var success = function(successMsg) {
  asyncOutput(successMsg);
};

var error = function(errorMsg) {
  asyncOutput(errorMsg);
};

