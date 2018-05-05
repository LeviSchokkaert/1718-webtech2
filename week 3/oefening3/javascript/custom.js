//draw a mountain
drawMountain(2);
drawMountain(5);
drawMountain(10);


setInterval(function(){
    var randomTrueFalse = Math.random() >=0.5; //true or false
    //getal tussen 1 en 4
    var randomBetwee = Math.floor(Math.random() * 4) + 1;

    //random true or false
    if(randomTrueFalse == true){
        drawMountain(randomBetwee); //teken berg
    }
    else{
        drawFlatArea(randomBetwee); //teken dal
    }
}, 5000); //elke seconde


function drawMountain(lengtOfMountain){
    //initiele toplengte
    let i=1;

    //helling
    document.write('/');

    //top berg
    while(i< lengtOfMountain){
        document.write("'");
        i++;
    }

    //afdaling
    document.write("\\");
}

function drawFlatArea(lenghtFlat){
    let i=1;
    while (i <= lenghtFlat){
        document.write("_");
        i++;
        
    }
}



