var request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/users/chrisolsson01/repos', true)
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

    /*   ---TODO---
    * Increase #left_side width depending on how many projects.
    * Example: if(html < 10 ) {width: 100px}
    */

    if(status.language == "CSS"){
      html += 1;
      statusHTML += $('#left_side').append('<p>'+html+'</p>');
    }
    if(status.language == "PHP"){
      php += 1;
      statusHTML += $('#left_side__php').append('<p>'+php+'</p>');
    }
    if(status.language == "TSQL" || status.language == "C#"){
      csharp += 1;
      statusHTML += $('#left_side__csharp').append('<p>'+csharp+'</p>');
      console.log(csharp);
    }
    if(status.language == "JavaScript"){
      js += 1;
      statusHTML += $('#left_side__js').append('<p>'+js+'</p>');
    }
    if(status.language == "Python"){
      python += 1;
      statusHTML += $('#left_side__python').append('<p>'+python+'</p>');
    }
  });

  //Store Programming Lang. Counter to json
  var text = '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';


  console.log("HTML: " + html + " PHP: " + php + " C#: " + csharp + " Javascript: " + js + " Python: " + python);
  $('#lang_first').append('<h1>hej</h1>');
  $('#horiGraph').html(statusHTML);
  

}

request.send();

$(function createGraph(){

});