

function avaa(){

  var url = "http://www.finnkino.fi/xml/Schedule/";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

          var jsonObj  = xmlhttp.responseXML;
          var tiedot = jsonObj.getElementsByTagName("Show");
          var nimet = jsonObj.getElementsByTagName("Title");
          var teatteri = jsonObj.getElementsByTagName("Theatre");
          var ajat=[];
          var testi = jsonObj.getElementsByTagName("dttmShowStart");
          document.getElementById("elokuvat").innerHTML ="";

          var lista = [];
          //Haetaan kaikki elokuvien nimet ja lisätään ne listaan
          for(var i=0; i<tiedot.length; i++){
          var elokuvanimi="<p>"+nimet[i].textContent+"</p>";
          var teatterinimi=teatteri[i].innerHTML;
          var aika = jsonObj.getElementsByTagName("dttmShowStart")[i].childNodes[0].nodeValue;
        

          //tästä vois tehdö kutsuttavan funktionin jokaselle erikseen??
          //laita listaan vain tennispalatsissa näkyvät näytökset
          var n = teatterinimi.localeCompare("Tennispalatsi, Helsinki");
              if(n==0){
                ajat[i]=aika; //kaikki tennispalatsin ajat
                //lisätään nimen lisäksi posterin kuva listaan
              lista[i]="<img src='" + tiedot[i].getElementsByTagName("EventMediumImagePortrait")[0].childNodes[0].nodeValue + "'/>"+elokuvanimi;

          }

        
   }
   console.log(ajat);

      //poistaa dublicated nimistä
     var filteredArr = lista.filter(function(item, index) {
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

          //lisää divit h3 tagin sisään sivuston html koodiin
          document.getElementsByTagName('h3')[0].appendChild(temp);
          }

        //muokkaa posterien+nimen paikkaa sivustolla divin avulla
        for (i = 0; i < arrayLength+2; i++) {
          $('.results').eq(i).css("float","left");
          $('.results').eq(i).css("padding","30px");
            }
           }
         }
       }

