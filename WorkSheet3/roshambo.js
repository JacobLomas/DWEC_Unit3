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