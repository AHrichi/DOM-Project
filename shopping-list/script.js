var x=parseFloat(document.getElementById("P_1").textContent);
var y=parseFloat(document.getElementById("P_2").textContent);
var z=parseFloat(document.getElementById("P_3").textContent);


function p_1(){
    var a = parseFloat(document.getElementById("in_1").value);
    document.getElementById("in_1").value=(a+1);
    x=parseFloat(document.getElementById("P_1").textContent=(1379*(a+1)).toFixed(2)) ;
    Tot();
    
}

function m_1(){
    var a = parseFloat(document.getElementById("in_1").value);
    if (a>0){
        document.getElementById("in_1").value=(a-1);
        x=parseFloat(document.getElementById("P_1").textContent=(1379*(a-1)).toFixed(2));
        Tot();
    }   
}



function p_2(){
    var a = parseFloat(document.getElementById("in_2").value);
    document.getElementById("in_2").value=(a+1);
    y=parseFloat(document.getElementById("P_2").textContent=(176.8*(a+1)).toFixed(2));
    Tot();
    
}

function m_2(){
    var a = parseFloat(document.getElementById("in_2").value);
    if (a>0){
        document.getElementById("in_2").value=(a-1);
        y=parseFloat(document.getElementById("P_2").textContent=(176.8*(a-1)).toFixed(2));
        Tot();
    }   
}



function p_3(){
    var a = parseFloat(document.getElementById("in_3").value);
    document.getElementById("in_3").value=(a+1);
    z=parseFloat(document.getElementById("P_3").textContent=(249*(a+1)).toFixed(2));
    Tot();
    
}

function m_3(){
    var a = parseFloat(document.getElementById("in_3").value);
    if (a>0){
        document.getElementById("in_3").value=(a-1);
        z=parseFloat(document.getElementById("P_3").textContent=(249*(a-1)).toFixed(2));
        Tot();
    }   
}
function H_1(){
    if (document.getElementById("l_1").style.color=="red"){
        document.getElementById("l_1").style.color="black";
    }else{document.getElementById("l_1").style.color="red"}
}
function H_2(){
    if (document.getElementById("l_2").style.color=="red"){
        document.getElementById("l_2").style.color="black";
    }else{document.getElementById("l_2").style.color="red"}
}
function H_3(){
    if (document.getElementById("l_3").style.color=="red"){
        document.getElementById("l_3").style.color="black";
    }else{document.getElementById("l_3").style.color="red"}
}
    
function Tot(){
    document.getElementById("finalPrice").value=x+y+z;
    
    
}
function S_1(){
    document.getElementById("I_1").remove()
    x=0;
    Tot();
}
function S_2(){
    document.getElementById("I_2").remove()
    y=0;
    Tot();
}
function S_3(){
    document.getElementById("I_3").remove()
    z=0;
    Tot();
}