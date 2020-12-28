var mapa=[
    [0,2,2,2,2,2,2,2,0,2,2,2,0,2,2,0,2,2,2,0,0,2,2,0],
    [2,0,1,1,1,1,1,1,2,1,0,1,2,1,1,2,1,1,1,2,2,1,3,2],
    [2,1,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,2,2,2,2,2,1,2,2,2,2,2,1,1,1,1,2,2,2],
    [2,1,2,2,2,1,2,0,0,0,2,1,2,0,0,0,2,1,2,2,1,2,0,0],
    [2,1,2,0,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2],
    [2,1,2,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,2,2],
    [2,1,1,1,1,0,2,3,1,1,1,1,1,1,1,3,2,1,2,2,1,2,0,0],
    [2,1,2,2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,1,1,1,2,2,2],
    [2,1,2,0,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2],
    [2,1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,1,1,1,2],
    [2,1,1,1,1,1,2,0,2,1,1,1,1,1,2,0,2,1,0,1,1,1,2,2],
    [0,2,0,2,2,2,2,0,2,2,2,2,2,2,2,0,2,2,2,2,2,0,2,0]
];
var puntaje=100;
var vidas=5;
var pacman={
    x:1,
    y:1
};
var ghost1={
    x:10,
    y:1
};
var ghost2={
    x:18,
    y:12
};
var ghost3={
    x:5,
    y:8
};

function mostrarMapa(){
    
    var output='';
    for(var i=0;i<mapa.length;i++){
        output+="<div class='row'>";
        for(var j=0;j<mapa[i].length;j++){
            if(mapa[i][j]==2){
                output+="<div class='brick'></div>";
            }
            else if(mapa[i][j]==1){
                output+="<div class='coin'></div>";
            }
            else if(mapa[i][j]==0){
                output+="<div class='empty'></div>";
            }
            else if(mapa[i][j]==3){
                output+="<div class='cherry'></div>";
            }
           /* else if(mapa[i][j]==4){
                output+="<div id='ghost1'></div>";
            }
            else if(mapa[i][j]==5){
                output+="<div id='ghost2'></div>";
            }
            else if(mapa[i][j]==6){
                output+="<div id='ghost3'></div>";
            } */
        }
        output+="</div>";
    } 
    
    document.getElementById('mapa').innerHTML=output;
}

function displayPacman(){
    document.getElementById('pacman').style.top= (pacman.y*30)+"px";
    document.getElementById('pacman').style.left= ((pacman.x*30))+"px";
}
function mostrarPuntaje(){
    document.getElementById('score').innerHTML=puntaje;   
}

function mostrarVidas(){
    document.getElementById('vidas').innerHTML=vidas;   
}

function displayGhost1(){
    document.getElementById('ghost1').style.top= (ghost1.y*30)+"px";
    document.getElementById('ghost1').style.left= (ghost1.x*30)+"px";
}
function displayGhost2(){
    document.getElementById('ghost2').style.top= (ghost2.y*30)+"px";
    document.getElementById('ghost2').style.left= (ghost2.x*30)+"px";
}
function displayGhost3(){
    document.getElementById('ghost3').style.top= (ghost3.y*30)+"px";
    document.getElementById('ghost3').style.left= (ghost3.x*30)+"px";
}

mostrarMapa();
displayPacman();
setInterval(displayGhost1, 3000);
setInterval(displayGhost2, 3000);
setInterval(displayGhost3, 3000);


mostrarVidas();

document.onkeydown = function(e){
    if(e.keyCode==37 && mapa[pacman.y][pacman.x-1]!=2){
        pacman.x --;
        document.getElementById("pacman").style.left=pacman.x+"px";
        document.getElementById("pacman").style.transform = "rotate(-180deg)";

    }
    if(e.keyCode==38 && mapa[pacman.y-1][pacman.x]!=2){
        pacman.y--;
        document.getElementById("pacman").style.top=pacman.y+"px";
        document.getElementById("pacman").style.transform = "rotate(-90deg)";
    }
    if(e.keyCode==39 && mapa[pacman.y][pacman.x+1]!=2){
        pacman.x++;
        document.getElementById("pacman").style.left=pacman.x+"px";
        document.getElementById("pacman").style.transform = "rotate(0deg)";
    }
    if(e.keyCode==40 && mapa[pacman.y+1][pacman.x]!=2){
        pacman.y++;
        document.getElementById("pacman").style.top=pacman.y+"px";
        document.getElementById("pacman").style.transform = "rotate(90deg)";
    }
    if(mapa[pacman.y][pacman.x]==1){
        mapa[pacman.y][pacman.x]=0;
        puntaje+=10;
        mostrarMapa();
        mostrarPuntaje();
    }
    if(mapa[pacman.y][pacman.x]==3){
        mapa[pacman.y][pacman.x]=0;
        puntaje+=50;
        mostrarMapa();
        mostrarPuntaje();
    }
    if ((pacman.y==ghost1.y && pacman.x == ghost1.x)||(pacman.y==ghost2.y && pacman.x == ghost2.x) || (pacman.y==ghost3.y && pacman.x == ghost3.x)){
        vidas = vidas -1;
        mostrarVidas();
    }
    if(vidas == 0){
        var gameover='<H1>GAME OVER</H1>';
        gameover+="<p>HIGH SCORE: "+ puntaje + "</p>"
        document.getElementById('box').innerHTML= gameover; 
    }
    
    displayPacman();
}