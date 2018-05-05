//elementen declareren
/*const firstName = document.getElementById('firstNameField').value;
const lastName = document.getElementById('lastNamefield').value;*/

const button = document.getElementById('btnMakeJoke');
const factsList = document.getElementById('facts');

// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};  

button.addEventListener('click', function(){

    //waarde uit de elementen halen
    const firstName = document.getElementById('firstNameField').value;
    const lastName = document.getElementById('lastNameField').value;
    //url dynamische parameters
    const url = "http://api.icndb.com/jokes/random?firstName=" + firstName +'&lastName=' + lastName;
   
    getJSON(url, function(error, data ){
        //schrijf de fact in venster
        const listItem = document.createElement('li');
        //inhoud toevoegen
        listItem.textContent = data.value.joke;
        //
        factsList.appendChild(listItem);
    })
})


/*const firstName = "Levi";
const lastName = "Schokkaert";

const url = "http://api.icndb.com/jokes/random?firstName=" + firstName +'&lastName=' + lastName;

//JSON functie opropen, binnen de callback manipuleren we de verkregen data
getJSON('http://api.icndb.com/jokes/random?firstName=Levi&lastName=Schokkaert', function(error, data){
    document.write(data.value.joke);
})*/