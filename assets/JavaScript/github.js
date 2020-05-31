var request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/users/chrisolsson01/repos', true) //Req. open
request.onload = function () {
  var data = JSON.parse(this.response);
  var statusHTML = '';
  var statusHTML2 = "";
  //Programming Lang. Counter
  var html = 0;
  var csharp = 0;
  var js = 0;
  var php = 0;
  var python = 0;

  $.each(data, function(i, status) {
    //Graph

    //HTML CSS
    if(status.language == "CSS"){
      html += 1;
      statusHTML += $('#left_side__html').append('<p>'+html+'</p>');
      $('#l0eft_side__html p').not('p:last').remove();
      var w = html * 30;
      var px = w + "px";
      document.getElementById("left_side__html").style.width = px;
    }else {
      statusHTML += $('#left_side__html').append('<p>'+html+'</p>');
      $('#left_side__html p').not('p:last').remove();
    }
    //PHP
    if(status.language == "PHP"){
      php += 1;
      statusHTML += $('#left_side__php').append('<p>'+php+'</p>');
      $('#left_side__php p').not('p:last').remove();
      var w = php * 30;
      var px = w + "px";
      document.getElementById("left_side__php").style.width = px;
    }else {
      statusHTML += $('#left_side__php').append('<p>'+php+'</p>');
      $('#left_side__php p').not('p:last').remove();
    }
    //C#
    if(status.language == "TSQL" || status.language == "C#"){
      csharp += 1;
      statusHTML += $('#left_side__csharp').append('<p>'+csharp+'</p>');
      $('#left_side__csharp p').not('p:last').remove();
      var w = csharp * 30;
      var px = w + "px";
      document.getElementById("left_side__csharp").style.width = px;
    }else {
      statusHTML += $('#left_side__csharp').append('<p>'+csharp+'</p>');
      $('#left_side__csharp p').not('p:last').remove();
    }
    //Js
    if(status.language == "JavaScript"){
      js += 1;
      statusHTML += $('#left_side__js').append('<p>'+js+'</p>');
      $('#left_side__js p').not('p:last').remove();
      var w = js * 30;
      var px = w + "px";
      document.getElementById("left_side__js").style.width = px;
    }else {
      statusHTML += $('#left_side__js').append('<p>'+js+'</p>');
      $('#left_side__js p').not('p:last').remove();
      document.getElementById("left_side__js").style.width = "20px";
    }
    //Python
    if(status.language == "Python"){
      python += 1;
      statusHTML += $('#left_side__python').append('<p>'+python+'</p>');
      $('#left_side__python p').not('p:last').remove();
      var w = python * 30;
      var px = w + "px";
      document.getElementById("left_side__python").style.width = px;
    }else {
      statusHTML += $('#left_side__python').append('<p>'+python+'</p>');
      $('#left_side__python p').not('p:last').remove();
      document.getElementById("left_side__python").style.width = "20px";
    }
  });

  console.log("HTML: " + html + " PHP: " + php + " C#: " + csharp + " Javascript: " + js + " Python: " + python);
  $('#horiGraph').html(statusHTML);
  

}

request.send();

$(function createGraph(){

});