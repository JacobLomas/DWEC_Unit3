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
        if(this.color=="blanco")
            this.posicion.fila--;
        else
            this.posicion.fila++;
    };
    comerDrcha(){
        if(this.color=="blanco"){
            this.posicion.fila--;
            this.posicion.col--;
        }
        else{
            this.posicion.fila++;
            this.posicion.col++;
        }
    };
    comerIzq(){
        if(this.color=="blanco"){
            this.posicion.fila--;
            this.posicion.col++;
        }
        else{
            this.posicion.fila++;
            this.posicion.col--;
        }
    }
    
};

class Torre extends Pieza{
    constructor(color,col, fila){
        super("torre", color);
        this.posicion={
            col:col,
            fila:fila
        };
    };
    moverAdelante(n){
        if(this.color=="blanco")
            this.posicion.fila-=n;
        else
            this.posicion.fila+=n;
    };
    moverAtras(n){
        if(this.color=="blanco")
            this.posicion.fila+=n;
        else
            this.posicion.fila-=n;
    };
    moverIzq(n){
        if(this.color=="blanco")
            this.posicion.col+=n;
        else
            this.posicion.col-=n;
    };
    moverDrch(n){
        if(this.color=="blanco")
            this.posicion.fila-=n;
        else
            this.posicion.fila+=n;
    }
};
class Alfil extends Pieza{
    constructor(color,col, fila){
        super("alfil",color);
        this.posicion={
            col:col,
            fila:fila
        };
    };
    moverAdelanteDrch(n){
        if(this.color=="blanco"){
            this.posicion.fila-=n;
            this.posicion.col-=n;
        }
        else{
            this.posicion.fila+=n;
            this.posicion.col+=n;
        }
    };
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