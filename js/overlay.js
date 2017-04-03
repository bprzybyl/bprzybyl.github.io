/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

// you can access arguments passed to your iframe like so
var num = t.arg('rand');

t.render(function(){
  // this function we be called once on initial load
  // and then called each time something changes that
  // you might want to react to, such as new data being
  // stored with t.set()
//  $('#files').bind('change', handleFileSelect);
});

// close overlay if user clicks outside our content
document.addEventListener('click', function(e) {
  if(e.target.tagName == 'BODY') {
    t.closeOverlay().done();
  }
});

// close overlay if user presses escape key
document.addEventListener('keyup', function(e) {
  if(e.keyCode == 27) {
    t.closeOverlay().done();
  }
});

// Copy from http://evanplaice.github.io/jquery-csv/examples/file-handling.html

$(document).ready(function() {
  if(isAPIAvailable()) {
    $('#files').bind('change', handleFileSelect);
  }
});

function isAPIAvailable() {
  // Check for the various File API support.
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
    return true;
  } else {
    // source: File API availability - http://caniuse.com/#feat=fileapi
    // source: <output> availability - http://html5doctor.com/the-output-element/
    document.writeln('The HTML5 APIs used in this form are only available in the following browsers:<br />');
    // 6.0 File API & 13.0 <output>
    document.writeln(' - Google Chrome: 13.0 or later<br />');
    // 3.6 File API & 6.0 <output>
    document.writeln(' - Mozilla Firefox: 6.0 or later<br />');
    // 10.0 File API & 10.0 <output>
    document.writeln(' - Internet Explorer: Not supported (partial support expected in 10.0)<br />');
    // ? File API & 5.1 <output>
    document.writeln(' - Safari: Not supported<br />');
    // ? File API & 9.2 <output>
    document.writeln(' - Opera: Not supported');
    return false;
  }
}

function postCard(destList, cardName, cardText) {

  var success = function(successMsg) {
    asyncOutput(successMsg);
  };

  var error = function(errorMsg) {
    asyncOutput("error: " + errorMsg);
  };

  var newCard = 
    {name: cardName, 
    desc: cardText,
    pos: "top", 
    due: null,
    idList: destList
    };

  Trello.post('/cards/', newCard, success, error);
}

function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object
  var file = files[0];
  
  // Testing whether t is accsssible
//  t.lists('id', 'name', 'url').then(function(promiseResult){console.log(promiseResult)});
  //console.log("t.board:");
  //t.board('id', 'name', 'url').then(function(promiseResult){console.log(promiseResult)});
  //console.log("t.lists:");
  t.lists('id', 'name').then(function(promiseResult){
    var lists = promiseResult;
    var list1 = lists[1].name;
    var id1 = lists[1].id;
    console.log("list1 = " + list1);
    console.log("id1 = " + id1);
    postCard(id1, "name1", "desc1");
  });
  // End testing

  
  // read the file metadata
  var output = ''
      output += '<span style="font-weight:bold;">' + escape(file.name) + '</span><br />\n';
      output += ' - FileType: ' + (file.type || 'n/a') + '<br />\n';
      output += ' - FileSize: ' + file.size + ' bytes<br />\n';
      output += ' - LastModified: ' + (file.lastModifiedDate ? file.lastModifiedDate.toLocaleDateString() : 'n/a') + '<br />\n';

      // read the file contents
      printTable(file);

      // post the results
      $('#list').append(output);
    }

    function printTable(file) {
      var reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function(event){
        var csv = event.target.result;
        var data = $.csv.toArrays(csv);
        var html = '';
        for(var row in data) {
          html += '<tr>\r\n';
          for(var item in data[row]) {
            html += '<td>' + data[row][item] + '</td>\r\n';
          }
          html += '</tr>\r\n';
        }
        $('#contents').html(html);
      };
      reader.onerror = function(){ alert('Unable to read ' + file.fileName); };
    }
  
