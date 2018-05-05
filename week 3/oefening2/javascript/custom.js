let popcorn = 3;
let donuts = 7;
let hamburger = 4;
// inputvelden uit DOM declareren
let input1 = document.getElementById('result1');
let input2 = document.getElementById('result2');
let input3= document.getElementById('result3');
let userSolution = document.getElementById('result4');
// inputvelden invullen
input1.value = popcorn + popcorn + popcorn;
input2.value = popcorn + hamburger + hamburger;
input3.value = donuts*2 + hamburger + donuts*2;
//correct oplossing berekenen
let correctSolution = hamburger + donuts * popcorn;
//button declareren
let checkButton = document.getElementById('check');
//als er op de knop geklikt word
checkButton.addEventListener('click', function(){
    if(correctSolution == userSolution.value){
        //correct
        alert("jepla dik feeste aaaah");
    }
    else{
        //wrong
        alert("das gene vetten eh piemel");
    }
});
