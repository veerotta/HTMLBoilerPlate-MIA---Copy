

function avaa(){


  var url = "http://www.finnkino.fi/xml/Schedule/";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

          var jsonObj  = xmlhttp.responseXML;
          var t = jsonObj.getElementsByTagName("Show");
          var shows = jsonObj.getElementsByTagName("Title");
          var where = jsonObj.getElementsByTagName("Theatre");
          //var info2 = "<img src='" + x[2].getElementsByTagName("EventMediumImagePortrait")[0].childNodes[0].nodeValue + "'/>";


          document.getElementById("elokuvat").innerHTML ="";
          var lista = [];


          for(var i=0; i<t.length; i++){
          var y="<p>"+shows[i].textContent+"</p>";
          var x=where[i].innerHTML;


          //tästä vois tehdö kutsuttavan funktionin jokaselle erikseen??
          //laita listaan vain tennispalatsissa näkyvät näytökset
          var n = x.localeCompare("Tennispalatsi, Helsinki");
              if(n==0){
              lista[i]="<img src='" + t[i].getElementsByTagName("EventMediumImagePortrait")[0].childNodes[0].nodeValue + "'/>"+y;

          }

   } 
          
               var n = x.localeCompare("Kinopalatsi, Helsinki");
              if(n==0){
              lista[i]="<img src='" + t[i].getElementsByTagName("EventMediumImagePortrait")[1].childNodes[1].nodeValue + "'/>"+y;

          }

   } 
    

   //järjestää aakkosjärjestykseen
   //lista.sort();





     var filteredArr = lista.filter(function(item, index) {//poistaa dublicated nimistä
      if (lista.indexOf(item) == index)
      return item;
      });


//tee jokaiselle posteri+otsikolle oma divi
      var arrayLength = filteredArr.length;
      var temp;
for (i = 0; i < arrayLength; i++) {
temp = document.createElement('div');
temp.className = 'results';
temp.innerHTML = filteredArr[i];
document.getElementsByTagName('h3')[0].appendChild(temp);
}
for (i = 0; i < arrayLength+2; i++) {
$('.results').eq(i).css("float","left");
$('.results').eq(i).css("padding","30px");
}

           }
         }



         function aika(){
          var url = "http://www.finnkino.fi/xml/Schedule";
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.open("GET", url, true);
          xmlhttp.send();
  
          xmlhttp.onreadystatechange = function() {
              if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  
                  var jsonObj  = xmlhttp.responseXML;
                  var show = jsonObj.getElementsByTagName("Show");
                  
                  var teatteri = jsonObj.getElementsByTagName("Theatre");
  
  
                  var lista = [];
                  for(var i=0; i<show.length; i++){
                    var aika = jsonObj.getElementsByTagName("dttmShowStart")[i].childNodes[0].nodeValue;
                    var teatterinimi = teatteri[i].innerHTML;
                  //tästä vois tehdö kutsuttavan funktionin jokaselle erikseen??
                  //laita listaan vain tennispalatsissa näkyvät näytökset

                  var n = teatterinimi.localeCompare("Kinopalatsi, Helsinki");
                  if(n==0){
                  lista[i]=aika+"<br>";

              }

  
                        //lisätään nimen lisäksi posterin kuva listaan
                      
  
           }
  
           console.log(lista);
           document.write(lista);
        }
      }
    }
  