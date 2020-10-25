function paresImpares(){
    var numeros=[];
    for(let i=1; i<=100; i++)
        numeros.push(parseInt(Math.random()*1000+1));
    console.log(numeros);
    function compare(a, b){
        if(a%2==0 && b%2==0)
            return 0;
        else if(a%2==0)
                return -1;
            else if(b%2==0)
                    return 1;
    }
    numeros.sort(compare);
    console.log(numeros);
}
paresImpares();

array= Array(10).fill(0).map(x => x++);
console.log(array.join(" "));


//var arrayBidimensional= new Array(7).fill(new Array(7).fill(0));
var arrayBidimensional=new Array(7);
for (var i = 0; i <7; i++) {
  arrayBidimensional[i] = new Array(7);
  for(var j=0; j<7; j++){
      arrayBidimensional[i][j]=0;
  }
}
for(let i=0; i<36000; i++)
    arrayBidimensional[parseInt(Math.random()*6+1)][parseInt(Math.random()*6+1)]+=1;
console.log(arrayBidimensional);
