class Book{
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
        this.books=[];
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
};
var lista=new BookList();
function main(){
    //Añadimos las etiquetas para la caja de añadir libro
    document.body.innerHTML='<div id="principal" style="border: 1px solid black; padding:20px; width:800px; height:800px;"> <div style="border: 1px solid black; padding:20px; width:300px;"> <label for="titulo">Titulo</label><input type="text" name="titulo" placeholder="Título" id="titulo"> <br>            <label for="genero">Género</label>            <input type="text" name="genero" placeholder="Género" id="genero"><br>            <label for="autor">Autor</label>            <input type="text" name="autor" placeholder="Autor" id="autor"><br>            <button id="añadir">Añadir libro</button>    </div></div>';
    document.getElementById("principal").innerHTML+='<br><br><div id="mostrarTabla" style="border: 1px solid black; padding:20px;"><button onclick="mostrarTabla()" id="mostrar">Mostrar tabla</button><div>';
    anadirLibro();
};
function anadirLibro(){
    document.getElementById("añadir").addEventListener("click", function(){ 
        if(document.getElementById("titulo").value=="" || document.getElementById("genero").value=="" || document.getElementById("autor").value=="")
            alert("Rellena todos los campos para añadir un libro");
        else{
            lista.add(new Book(document.getElementById("titulo").value,document.getElementById("genero").value, document.getElementById("autor").value));
            document.getElementById("titulo").value="";
            document.getElementById("genero").value="";
            document.getElementById("autor").value="";
        }
    });
};
function mostrarTabla(){
    var tabla='<br><br><table style="border: 1px solid black; padding:20px; width:100%;">';
    tabla+='<tr> <td>Título</td> <td>Género</td> <td>Autor</td>  <td>Leído</td> </tr>';    
    for(libro of lista.books)
        tabla+='<tr><td>'+libro.title+'</td><td>'+libro.genre+'</td><td>'+libro.author+'</td><td>'+libro.read+'</td>'; 
    document.getElementById("mostrarTabla").innerHTML='<button onclick="mostrarTabla()" id="mostrar">Actualizar tabla</button>'+tabla;
};