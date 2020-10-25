//Ejercicio 2
function lanzamiento(){
    return parseInt(Math.random()*6+1);
}
console.log("Dado 1: "+lanzamiento());
console.log("Dado 2: "+lanzamiento());

//Ejercicio 3
var numeros=[0,0,0,0,0,0,0];
for(let i=0; i<1000;i++)
    for(let j=1; j<=6; j++)
        numeros[lanzamiento()]++;
console.log(numeros);
//Ejercicio 6
function potencia(base, exp){
    let res;
    if(exp==0)
        res= 1;
    else if(exp>0)
            res=base*potencia(base, exp-1);
        else
            res=(1/base) *(1/(base*potencia(base, exp+1)));
    return res;
}
console.log(potencia(2,-3)+" "+Math.pow(2, -3));

//Ejercicio 7
function factorial(n){
    let res;
    if(n==0)
        return 1;
    else
        res=n*factorial(n-1);
    return res;
}
console.log(factorial(4));