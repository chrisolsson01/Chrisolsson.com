var request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/users/chrisolsson01/repos', true)
request.onload = function () {
  var data = JSON.parse(this.response);
  var statusHTML = '';
  var statusHTML2 = "";
  var html;
  var csharp;
  var js;
  var php;
  var python;

  $.each(data, function(i, status) {
    //Graph
    // if()
    // $('#language')
    if(status.language == "CSS"){
      html += 1;
    }
    if(status.language == "TSQL"){
      csharp += 1;
    }
    if(status.language == "PHP"){
      php += 1;
    }
    if(status.language == "JavaScript"){
      js += 1;
    }
    if(status.language == "Python"){
      python += 1;
    }
    // if(status.language == "CSS"){
    //   // if(!statusHTML == $('#lang').append('<h3 style="color:black;" id="language">HTML</h3>')){
    //   //   statusHTML += $('#lang').append('<h3 style="color:black;" id="language">HTML</h3>');
    //   // }
    //   statusHTML += $('#lang').append('<h3 style="color:black;" id="language">HTML</h3>');
    // }
    // else if(status.language == "TSQL"){
    //   statusHTML += $('#lang').append('<h3 style="color:black;" id="language">C#</h3>');
    // }else{
    //   statusHTML += $('#lang').append('<h3 style="color:black;" id="language">'+status.language+'</h3>');
    // }

    

  });
  $('#horiGraph').html(statusHTML);
  
}
request.send();

$(function createGraph(){

});