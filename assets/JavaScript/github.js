var request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/users/chrisolsson01/repos', true)
request.onload = function () {
  var data = JSON.parse(this.response);
  var statusHTML = '';
  var statusHTML2 = "";
  $.each(data, function(i, status) {
    //Graph
    statusHTML += $('#lang').append('<h3 style="color:black;position:absolute;" id="lang'+ status.id +'">'+status.language+'</h3>');
  


    //Feauturing projects
    // statusHTML2 += $('#proj-features').append('<img src=""');
  });
  $('#horiGraph').html(statusHTML);
  
}
request.send();

$(function createGraph(){

});