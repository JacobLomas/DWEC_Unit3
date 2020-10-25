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
class Pieza{
    constructor(nombre){
        this.nombre=nombre;
    }
}
class Peon extends Pieza{
    constructor(){
        super("peon");
    }
};

class Torre extends Pieza{
    constructor(){
        super("torre");
    }
};
class Alfil extends Pieza{
    constructor(){
        super("alfil");
    }
};
class Caballo extends Pieza{
    constructor(){
        super("caballo");
    }
};
class Rey extends Pieza{
    constructor(){
        super("rey");
    }
};
class Reina extends Pieza{
    constructor(){
        super("reina");
    }
}

class Player{
    constructor(nombre){
        this.nombre=nombre;
        this.piezas=new Array(16);
        this.rellenarPiezas();
        //Preguntar a Jose  this.piezas.forEach(element, indice =>{if(indice<8) element=new Peon()});
    };
    rellenarPiezas(){
        for(let i=0; i<16;i++){
            if(i<8)
                this.piezas[i]=new Peon();
            if(i==8 || i==15)
                this.piezas[i]=new Torre();
            if(i==9 || i==14)
                this.piezas[i]=new Caballo();
            if(i==10 || i==13)
                this.piezas[i]=new Alfil();
            if(i==11)
                this.piezas[i]=new Reina();
            if(i==12)
                this.piezas[i]=new Rey();
        }
    }
}
player=new Player("Jacob");