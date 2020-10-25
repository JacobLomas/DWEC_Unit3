/* class Book{
    title;
    genre;
    author;
    read;
    readDate;
    constructor(title, genre, author){
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.read=false;
        this.readDate=null;
    };
    setRead(){
        this.read=true;
        this.readDate=new Date();
    }
};

class BookList{
    books;
    constructor(){
        books=[];
    };
    add(book){
        this.books.push(book);
    };

    get readBooks(){
        let cont=0;
        for(let libro of this.books)
            if(libro.read)
                cont++;
        return cont;
    }
    get notReadBooks(){
        return this.books.length-this.readBooks;
    };
    get currentBook(){
        return this.books.find(libro =>{return !libro.read;})
    };
    get lastBookRead(){
        let indiceCurrent=this.books.findIndex(libro =>{return !libro.read;});
        return this.books[indiceCurrent-1];    };
    get nextBookToRead(){
        let indiceCurrent=this.books.findIndex(libro =>{return !libro.read;});
        return this.books[indiceCurrent+1];
    };
    finishCurrentBook(){
        this.currentBook.setRead();
    }   
}; */
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
class Player{
    constructor(name){
        this.name=name;
        this.wins=0;
        this.loses=0;
        this.hand=null;
    }
    play(){
        let tirada=parseInt(Math.random()*3+1);
        if(tirada==1)
            this.hand="Stone";
        else if(tirada==2)
            this.hand="Paper";
            else
                this.hand="Scissors";
        return this.hand;
    }
    win(){
        this.wins++;
        console.log(this.name+" has won the game with "+this.hand);
        console.log(this.name+" has "+this.wins+" wins and "+ this.loses+" loses");
    }
    lose(){
        this.loses++;
        console.log(this.name+" has lost the game with "+this.hand);
        console.log(this.name+" has "+this.wins+" wins and "+ this.loses+" loses");
    }
}
class Roshambo{
    constructor(player1, player2){
        this.player1= player1;
        this.player2= player2;
    };
    play(){
        let intentos=0;  
        let playPlayer1, playPlayer2;      
        do{
            intentos++;
            playPlayer1=this.player1.play();
            playPlayer2=this.player2.play();
            if((playPlayer1==="Stone" && playPlayer2==="Scissors") || (playPlayer1==="Scissors" && playPlayer2==="Paper") || (playPlayer1==="Paper" && playPlayer2==="Stone")){
                this.player1.win();
                this.player2.lose();
                console.log(intentos+" intentos");
            }else if(!(playPlayer1===playPlayer2)){
                this.player2.win();
                this.player1.lose();
                console.log(intentos+" intentos");
                }
        }while(playPlayer1===playPlayer2);
    };
};

var local=new Player("Rosa");
var visitante= new Player("Pedro");
var juego=new Roshambo(local, visitante);
juego.play();