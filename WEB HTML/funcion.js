function saludo(){
    alert("Hola");
}
function suma(a,b){
    return (a+b);
}
function IVA(a){
    return (a*0.21);
}
function totalconiva(a){
    return a*1.1;
}
function pintaIVA(pb,pos){
    var total= totalconiva(pb);
    var elem=document.getElementById(pos);
    elem.innerHTML=total.toFixed(3);
}