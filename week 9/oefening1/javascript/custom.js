// knop en inputveld declareren
let btnSubmit = document.getElementById('btn');
let inputField = document.getElementById('Mol')
// click event op knop zetten
btnSubmit.addEventListener("click", function(){
   //de mol uit het veld halen
   let mole = inputField.value;

   // na een klik moet het in local opgeslagen worden
   localStorage.setItem('myMole', mole)
});

// stap 3: controleren of er een mol in de storage zit
let storedMole = localStorage.getItem('myMole');
if(storedMole != null) {
    btnSubmit.style.display = "none";
    inputField.style.display="none";
    document.getElementById('uitslag')
    document.write("dit is uw mol " + storedMole)
}
else{
    document.write("voer een mol in mengel")
}