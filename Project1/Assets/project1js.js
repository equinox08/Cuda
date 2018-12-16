

alert ("You are fighting for the belt, and on the other side is undefeated, undisputed champion and heavy favourite! Everything goes through your mind, and before you know it, you are inside the octagon, and you hear the bell!");

alert ("The fight starts, and after couple of seconds, your opponent goes for a right hook!");
var answer = prompt("What will you do? Block, duck, step back or go for a counter?");
var randomNumber = Math.round(Math.random() * 5);

alert("Nice job! You andswered 1st threat with nice" + " " + answer + "!");

prompt("But before you know it champion goes for a takedown?What will you do? Back off, sprawl or try to counter?");

if (randomNumber <= 2) {
    alert("He took you down, that was slow reaction!");
    var tdanswer = prompt("After some passive time he goes for an armbar, and you are not in good position! Will you just try to resist or will you look for an opening to escape?");
if (randomNumber <= 4) {
    alert("He's got you, your reaction is slow again, there is no way out, you had to tap!");
    alert("Nice try, but you need to train harder if you want to be a champion!")
}
    else {
        alert("You managed to pull urself out and in a second managed to stand up! Good job");
        prompt ("You see clear opening, now you have him! Go for head kick, knee or hands legs combination?");
    if (randomNumber <=5) {
        alert("You got him, he's on the ground and you go for vicious ground and pound, and short after judge had to stop the match!!!");
        alert("GRAT JOB, CONGRATULATIONS, YOU ARE THE NEW CHAMPION!!!");
    }
    }
}
else {
    alert("Nice timing again!!!");

    prompt ("You see clear opening, now you have him! Go for head kick, knee or hands legs combination?");
    if (randomNumber <=5) {
        alert("You got him, he's on the ground and you go for vicious ground and pound, and short after judge had to stop the match!!!");
        alert("GRAT JOB, CONGRATULATIONS, YOU ARE THE NEW CHAMPION!!!");
    }
}
