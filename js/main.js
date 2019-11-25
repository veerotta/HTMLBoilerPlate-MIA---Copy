var tennisnäytökset = [];
var kinopalatsi = [];
var itisnäytökset = [];
var maximnäytökset = [];
var flamingonäytökset = [];
var sellonäytökset = [];
var omenanäytökset = [];

function etsitennis(){
  //true oikealle functionille ja false muille napeille, etsitennis on linkki1, kino linkki 2 jne. Voi nimetä html paremmin kunhan muuttaa täölläkin
  $('.kinonappi').prop('disabled', false);
  $('.tennisnappi').prop('disabled', true);
  $('.maximnappi').prop('disabled', false);
  $('.omenanappi').prop('disabled', false);
  $('.sellonappi').prop('disabled', false);
  $('.flamingonappi').prop('disabled', false);
  $('.itisnappi').prop('disabled', false);

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
        $('.kinonappi').prop('disabled', true);
        $('.tennisnappi').prop('disabled', false);
        $('.maximnappi').prop('disabled', false);
        $('.omenanappi').prop('disabled', false);
        $('.sellonappi').prop('disabled', false);
        $('.flamingonappi').prop('disabled', false);
        $('.itisnappi').prop('disabled', false);
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
              $('.kinonappi').prop('disabled', false);
              $('.tennisnappi').prop('disabled', false);
              $('.maximnappi').prop('disabled', false);
              $('.omenanappi').prop('disabled', false);
              $('.sellonappi').prop('disabled', false);
              $('.flamingonappi').prop('disabled', false);
              $('.itisnappi').prop('disabled', true);
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
                        itisnäytökset[i]="<img src='" + tiedot[i].getElementsByTagName("EventMediumImagePortrait")[0].childNodes[0].nodeValue + "'/>"+elokuvanimi;
                      }
               }
               filteroi(itisnäytökset);
             
                     }
                    }
                   }

                   function etsiMaxim(){
                    //true oikealle functionille ja false muille napeille, etsitennis on linkki1, kino linkki 2 jne. Voi nimetä html paremmin kunhan muuttaa täölläkin
                    $('.kinonappi').prop('disabled', false);
                    $('.tennisnappi').prop('disabled', false);
                    $('.maximnappi').prop('disabled', true);
                    $('.omenanappi').prop('disabled', false);
                    $('.sellonappi').prop('disabled', false);
                    $('.flamingonappi').prop('disabled', false);
                    $('.itisnappi').prop('disabled', false);
                  
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
                            var vertaamaxim = teatterinimi.localeCompare("Maxim, Helsinki");
                  
                                //muista täällä muuttaa myös kaikki
                                if(vertaamaxim==0){
                                  ajat[i]=aika; //kaikki tennispalatsin ajat
                                  //lisätään nimen lisäksi posterin kuva listaan
                                maximnäytökset[i]="<img src='" + tiedot[i].getElementsByTagName("EventMediumImagePortrait")[0].childNodes[0].nodeValue + "'/>"+elokuvanimi;
                            }
                  
                     }
                  
                     //ja tämä
                     filteroi(maximnäytökset);
                   
                           }
                          }
                         }

                         function etsiFlamingo(){
                          //true oikealle functionille ja false muille napeille, etsitennis on linkki1, kino linkki 2 jne. Voi nimetä html paremmin kunhan muuttaa täölläkin
                          $('.kinonappi').prop('disabled', false);
                          $('.tennisnappi').prop('disabled', false);
                          $('.maximnappi').prop('disabled', false);
                          $('.omenanappi').prop('disabled', false);
                          $('.sellonappi').prop('disabled', false);
                          $('.flamingonappi').prop('disabled', true);
                          $('.itisnappi').prop('disabled', false);
                        
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
                                  var vertaaFlamingo = teatterinimi.localeCompare("Flamingo, Vantaa");
                        
                                      //muista täällä muuttaa myös kaikki
                                      if(vertaaFlamingo==0){
                                        ajat[i]=aika; //kaikki tennispalatsin ajat
                                        //lisätään nimen lisäksi posterin kuva listaan
                                      flamingonäytökset[i]="<img src='" + tiedot[i].getElementsByTagName("EventMediumImagePortrait")[0].childNodes[0].nodeValue + "'/>"+elokuvanimi;
                                  }
                        
                           }
                        
                           //ja tämä
                           filteroi(flamingonäytökset);
                         
                                 }
                                }
                               }


                               function etsiSello(){
                                //true oikealle functionille ja false muille napeille, etsitennis on linkki1, kino linkki 2 jne. Voi nimetä html paremmin kunhan muuttaa täölläkin
                                $('.kinonappi').prop('disabled', false);
                                $('.tennisnappi').prop('disabled', false);
                                $('.maximnappi').prop('disabled', false);
                                $('.omenanappi').prop('disabled', false);
                                $('.sellonappi').prop('disabled', true);
                                $('.flamingonappi').prop('disabled', false);
                                $('.itisnappi').prop('disabled', false);
                              
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
                                        var vertaasello = teatterinimi.localeCompare("Sello, Espoo");
                              
                                            //muista täällä muuttaa myös kaikki
                                            if(vertaasello==0){
                                              ajat[i]=aika; //kaikki tennispalatsin ajat
                                              //lisätään nimen lisäksi posterin kuva listaan
                                            sellonäytökset[i]="<img src='" + tiedot[i].getElementsByTagName("EventMediumImagePortrait")[0].childNodes[0].nodeValue + "'/>"+elokuvanimi;
                                        }
                              
                                 }
                              
                                 //ja tämä
                                 filteroi(sellonäytökset);
                               
                                       }
                                      }
                                     }
                                     function etsiOmena(){
                                      //true oikealle functionille ja false muille napeille, etsitennis on linkki1, kino linkki 2 jne. Voi nimetä html paremmin kunhan muuttaa täölläkin
                                      $('.kinonappi').prop('disabled', false);
                                      $('.tennisnappi').prop('disabled', false);
                                      $('.maximnappi').prop('disabled', false);
                                      $('.omenanappi').prop('disabled', true);
                                      $('.sellonappi').prop('disabled', false);
                                      $('.flamingonappi').prop('disabled', false);
                                      $('.itisnappi').prop('disabled', false);
                                    
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
                                              var vertaaomena = teatterinimi.localeCompare("Omena, Espoo");
                                    
                                                  //muista täällä muuttaa myös kaikki
                                                  if(vertaaomena==0){
                                                    ajat[i]=aika; //kaikki tennispalatsin ajat
                                                    //lisätään nimen lisäksi posterin kuva listaan
                                                  omenanäytökset[i]="<img src='" + tiedot[i].getElementsByTagName("EventMediumImagePortrait")[0].childNodes[0].nodeValue + "'/>"+elokuvanimi;
                                              }
                                    
                                       }
                                    
                                       //ja tämä
                                       filteroi(omenanäytökset);
                                     
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
