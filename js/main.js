// function printNames(){
//     document.write("Dion");
//     document.write("<br>");
//     document.write("Lavdim");
//     setTimeout(function(){document.write("Saimir");},3000);
//     document.write("<br>");
//     document.write("Ali");
// }

// printNames();

var colors = ['red','green','blue','purple'];

function changeBgColor(){
    document.querySelector('body').style.background = colors[Math.floor(Math.random()*colors.length)];
}

var names = ['Dion','Lavdim','Saimir','Ali'];

function randomNames(){
    document.querySelector('body').innerHTML = names[Math.floor(Math.random()*names.length)];
}

setInterval(changeBgColor,1000);
setInterval(randomNames,1000);

