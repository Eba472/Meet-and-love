var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        console.log("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);



// Beginning of second character


var character1 = document.getElementById("character1");
var block1 = document.getElementById("block1");
var counter1=0;
function jump(){
    if(character1.classList == "animate1"){return}
    character1.classList.add("animate1");
    setTimeout(function(){
        character.classList.remove("animate1");
    },300);
}
var checkDead = setInterval(function() {
    let character1Top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let block1Left = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(block1Left<20 && block1Left>-20 && character1Top>=130){
        block.style.animation = "none";
        console.log("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);