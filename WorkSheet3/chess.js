/* class Peon{
    constructor(fila, columna){
        this.nombre="peon";
        this.fila=fila;
        this.columna=columna;
    }
    mover(){
        this.fila+=1;
    }
}
 class Player{
    constructor(){
        this.fichas=new Array(16).fill(true);
    }
}
class Board{
    constructor(){
        this.rellenarTablero();
    }
    rellenarTablero(){ //He intentado hacer esta funcion con foreach pero esta es la unica manera en la que lo he conseguido :(
        this.tablero=new Array(8);
        for (var i = 0; i <8; i++) {
            this.tablero[i] = new Array(8);
            for(var j=0; j<8; j++){
                if(i==6 || i==1)
                this.tablero[i][j]=new Peon(i,j);
                else
                    this.tablero[i][j]=true;
            }
        }
    }
    moverPeon(i,j){
        this.tablero[i][j].mover(i-1,j);
        this.tablero[i-1][j]=this.tablero[i][j];
        this.tablero[i][j]=false;
    }
}
class Chess{
    constructor(){
        this.teamWhite=new Player();
        this.teamBlack=new Player();
        this.board=new Board();
    }

} 

var ajedrez=new Chess();
 */
//Me da pereza borrar esta clase pero no me sirve pa mucho
class Pieza{
    constructor(nombre,color){
        this.nombre=nombre;
        this.color=color;
    }
}
class Peon extends Pieza{
    constructor(color,col, fila){
        super("peon", color);
        this.posicion={
            col:col,
            fila:fila
        };
    }
    mover(){

    }
    
};

class Torre extends Pieza{
    constructor(color,col, fila){
        super("torre", color);
        this.posicion={
            col:col,
            fila:fila
        };
    }
};
class Alfil extends Pieza{
    constructor(color,col, fila){
        super("alfil",color);
        this.posicion={
            col:col,
            fila:fila
        };
    }
};
class Caballo extends Pieza{
    constructor(color, col, fila){
        super("caballo",color);
        this.posicion={
            col:col,
            fila:fila
        };
    }
};
class Rey extends Pieza{
    constructor(color, col, fila){
        super("rey",color);
        this.posicion={
            col:col,
            fila:fila
        };
    }
};
class Reina extends Pieza{
    constructor(color, col, fila){
        super("reina",color);
        this.posicion={
            col:col,
            fila:fila
        };
    }
}

class Player{
    constructor(nombre, color){
        this.nombre=nombre;
        this.color=color;
        this.piezas=new Array(16);
        this.rellenarPiezas();
        //Preguntar a Jose no funciona  this.piezas.forEach(element, indice =>{if(indice<8) element=new Peon()});
    };
    rellenarPiezas(){
        if(this.color=="negro"){
            for(let i=0; i<16;i++){
                if(i<8)
                    this.piezas[i]=new Peon(this.color,i,0);
                if(i==8 || i==15)
                    this.piezas[i]=new Torre(this.color,i-8,1);
                if(i==9 || i==14)
                    this.piezas[i]=new Caballo(this.color,i-8,1);
                if(i==10 || i==13)
                    this.piezas[i]=new Alfil(this.color,i-8,1);
                if(i==11)
                    this.piezas[i]=new Reina(this.color,i-8,1);
                if(i==12)
                    this.piezas[i]=new Rey(this.color,i-8,1);
            }
        }
        else{
            for(let i=0; i<16;i++){
                if(i<8)
                    this.piezas[i]=new Peon(this.color,i,6);
                if(i==8 || i==15)
                    this.piezas[i]=new Torre(this.color,i-8,7);
                if(i==9 || i==14)
                    this.piezas[i]=new Caballo(this.color,i-8,7);
                if(i==10 || i==13)
                    this.piezas[i]=new Alfil(this.color,i-8,7);
                if(i==11)
                    this.piezas[i]=new Reina(this.color,i-8,7);
                if(i==12)
                    this.piezas[i]=new Rey(this.color,i-8,7);
            };
        }
        }
    }
p1=new Player("Jacob","blanco");
p2=new Player("Raquel","negro");