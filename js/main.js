var tennisnäytökset = [];
var kinopalatsi = [];
var itis = [];
var maxim = [];
var flamingo = [];
var sello = [];
var omena = [];

function etsitennis(){
  //true oikealle functionille ja false muille napeille, etsitennis on linkki1, kino linkki 2 jne. Voi nimetä html paremmin kunhan muuttaa täölläkin
  $('.linkit2').prop('disabled', false);
  $('.linkit1').prop('disabled', true);
  $('.linkit3').prop('disabled', false);
  $('.linkit4').prop('disabled', false);
  $('.linkit5').prop('disabled', false);
  $('.linkit6').prop('disabled', false);
  $('.linkit7').prop('disabled', false);

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

          //Haetaan kaikki elokuvien nimet ja lisätään ne listaan
          for(var i=0; i<tiedot.length; i++){
          var elokuvanimi="<p>"+nimet[i].textContent+"</p>";
          var teatterinimi=teatteri[i].innerHTML;
          var aika = jsonObj.getElementsByTagName("dttmShowStart")[i].childNodes[0].nodeValue;
        

          //tästä vois tehdö kutsuttavan funktionin jokaselle erikseen??
          //laita listaan vain tennispalatsissa näkyvät näytökset

          //muuta vertaateatterin nimeksi ja "" haku mikä teatteri
          var vertaatennis = teatterinimi.localeCompare("Tennispalatsi, Helsinki");

              //muista täällä muuttaa myös kaikki
              if(vertaatennis==0){
                ajat[i]=aika; //kaikki tennispalatsin ajat
                //lisätään nimen lisäksi posterin kuva listaan
              tennisnäytökset[i]="<img src='" + tiedot[i].getElementsByTagName("EventMediumImagePortrait")[0].childNodes[0].nodeValue + "'/>"+elokuvanimi;
          }

   }

   //ja tämä
   filteroi(tennisnäytökset);
 
         }
        }
       }




       function etsikino(){
        $('.linkit2').prop('disabled', true);
        $('.linkit1').prop('disabled', false);
        var url = "http://www.finnkino.fi/xml/Schedule/";
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
      
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              document.getElementById("elokuvat").innerHTML ="";
                var jsonObj  = xmlhttp.responseXML;
                var tiedot = jsonObj.getElementsByTagName("Show");
                var nimet = jsonObj.getElementsByTagName("Title");
                var teatteri = jsonObj.getElementsByTagName("Theatre");
                var ajat=[];
                var testi = jsonObj.getElementsByTagName("dttmShowStart");
                
      
                //Haetaan kaikki elokuvien nimet ja lisätään ne listaan
                for(var i=0; i<tiedot.length; i++){
                var elokuvanimi="<p>"+nimet[i].textContent+"</p>";
                var teatterinimi=teatteri[i].innerHTML;
                var aika = jsonObj.getElementsByTagName("dttmShowStart")[i].childNodes[0].nodeValue;
              
      
                //tästä vois tehdö kutsuttavan funktionin jokaselle erikseen??
                //laita listaan vain tennispalatsissa näkyvät näytökset

                var vertaakino = teatterinimi.localeCompare("Kinopalatsi, Helsinki");
         
                if(vertaakino==0){
                  kinopalatsi[i]="<img src='" + tiedot[i].getElementsByTagName("EventMediumImagePortrait")[0].childNodes[0].nodeValue + "'/>"+elokuvanimi;
                }
         }
         filteroi(kinopalatsi);
       
               }
              }
             }



             function etsiItis(){
              $('.linkit3').prop('disabled', true);
              $('.linkit1').prop('disabled', false);
              $('.linkit2').prop('disabled', false);
              var url = "http://www.finnkino.fi/xml/Schedule/";
              var xmlhttp = new XMLHttpRequest();
              xmlhttp.open("GET", url, true);
              xmlhttp.send();
            
              xmlhttp.onreadystatechange = function() {
                  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById("elokuvat").innerHTML ="";
                      var jsonObj  = xmlhttp.responseXML;
                      var tiedot = jsonObj.getElementsByTagName("Show");
                      var nimet = jsonObj.getElementsByTagName("Title");
                      var teatteri = jsonObj.getElementsByTagName("Theatre");
                      var ajat=[];
                      var testi = jsonObj.getElementsByTagName("dttmShowStart");
                      
            
                      //Haetaan kaikki elokuvien nimet ja lisätään ne listaan
                      for(var i=0; i<tiedot.length; i++){
                      var elokuvanimi="<p>"+nimet[i].textContent+"</p>";
                      var teatterinimi=teatteri[i].innerHTML;
                      var aika = jsonObj.getElementsByTagName("dttmShowStart")[i].childNodes[0].nodeValue;
                    
            
                      //tästä vois tehdö kutsuttavan funktionin jokaselle erikseen??
                      //laita listaan vain tennispalatsissa näkyvät näytökset
      
                      var vertaaitis = teatterinimi.localeCompare("Itis, Helsinki");
               
                      if(vertaaitis==0){
                        itis[i]="<img src='" + tiedot[i].getElementsByTagName("EventMediumImagePortrait")[0].childNodes[0].nodeValue + "'/>"+elokuvanimi;
                      }
               }
               filteroi(itis);
             
                     }
                    }
                   }
      

       function filteroi(teatteri){
        
        $('h3').text('');
        //poistaa dublicated nimistä
       var filteredTennis = teatteri.filter(function(item, index) {
        if (teatteri.indexOf(item) == index)
        return item;
        });
  
        //tee jokaiselle posteri+otsikolle oma divi
        var arrayLength = filteredTennis.length;
        var temp;
          for (i = 0; i < arrayLength; i++) {
            temp = document.createElement('div');
            temp.className = 'results';
            temp.innerHTML = filteredTennis[i];
  
            //lisää divit h3 tagin sisään sivuston html koodiin
            document.getElementsByTagName('h3')[0].appendChild(temp);
            }
  
          //muokkaa posterien+nimen paikkaa sivustolla divin avulla
          for (i = 0; i < arrayLength+2; i++) {
            $('.results').eq(i).css("float","left");
            $('.results').eq(i).css("padding","30px");
              }
             }


             function disable(){
              $('.linkit2').prop('disabled', false);
             }
