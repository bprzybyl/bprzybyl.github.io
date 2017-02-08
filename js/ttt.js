TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
    icon: './Trane_logo.svg',
    text: 'Trane Button',
    callback: function(t){
      alert("hey!");
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
