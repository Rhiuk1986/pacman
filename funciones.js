var mapa=[
    [2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,2,1,1,2],
    [2,1,2,1,2,1,2,1,2,2],
    [2,1,2,1,2,1,2,1,2,2],
    [2,1,1,1,2,1,1,1,2,2],
    [2,2,2,2,2,2,2,2,2,2]
];


function mostrarMapa(){
    for(var i=0;i<mapa.length;i++){
        var salida="<div class='row'>";
            for(var j=0;j<mapa[i].length;j++){
                console.log("["+i+","+j+"]="+mapa[i][j]);
                if(mapa[i][j]==2){
                    salida+="<div class='brick'></div>";
                }
                else if(mapa[i][j]==1){
                    salida+="<div class='coin'></div>";
                }
                else if(mapa[i][j]==0){
                    salida+="<div class='empty'></div>";
                }
                else if(mapa[i][j]==3){
                    salida+="<div class='cherry'></div>";
                }
            }    
    }
  
    document.getElementById('mapa').innerHTML= salida;

}

mostrarMapa();