import {Book, BookList} from "./clasesbk.js";
window.onload=main;
var lista=new BookList();
function main(){    
    //Añadimos las etiquetas para la caja de añadir libro
    document.body.innerHTML='<div id="principal" style="border: 1px solid black; padding:20px; width:800px; height:800px;"> <div style="border: 1px solid black; padding:20px; width:300px;"> <label for="titulo">Titulo</label><input type="text" name="titulo" placeholder="Título" id="titulo"> <br>            <label for="genero">Género</label>            <input type="text" name="genero" placeholder="Género" id="genero"><br>            <label for="autor">Autor</label>            <input type="text" name="autor" placeholder="Autor" id="autor"><br>            <button id="anadir">Añadir libro</button>    </div></div>';
    document.getElementById("principal").innerHTML+='<br><br><div id="mostrarTabla" style="border: 1px solid black; padding:20px;"><button onclick="mostrarTabla()" id="mostrar">Mostrar tabla</button><div>';
    document.getElementById("principal").innerHTML+='<div id="info" style="border: 1px solid black; padding:20px; position:absolute; left:420px; top:30px"></div>';
    document.getElementById("anadir").addEventListener("click", function(){ 
        if(document.getElementById("titulo").value=="" || document.getElementById("genero").value=="" || document.getElementById("autor").value=="")
            alert("Rellena todos los campos para añadir un libro");
        else{
            lista.add(new Book(document.getElementById("titulo").value,document.getElementById("genero").value, document.getElementById("autor").value));
            document.getElementById("titulo").value="";
            document.getElementById("genero").value="";
            document.getElementById("autor").value="";
            mostrarTabla();
        }
    });

    //anadirLibro();
};
function anadirLibro(){
    };
window.mostrarTabla =function(){
    var tabla='<br><br><table style="border: 1px solid black; padding:20px; width:100%;">';
    tabla+='<tr> <td>Título</td> <td>Género</td> <td>Autor</td>  <td>Leído</td> </tr>';    
    for(let libro of lista.books)
        tabla+='<tr><td>'+libro.title+'</td><td>'+libro.genre+'</td><td>'+libro.author+'</td><td>'+libro.read+'</td>'; 
    document.getElementById("mostrarTabla").innerHTML='<button onclick="mostrarTabla()" id="mostrar">Actualizar tabla</button>'+tabla;
    
    var info='<label>Ultimo libro leído:'+ultimoLibroMostrar()+'</label>';
    info+='<br> <label>Siguiente libro para leer: '+siguienteLibroMostrar()+'</label>';
    info+='<br> <label>Libro que me estoy leyendo: '+actualLibroMostrar()+'</label>';
    info+='<br> <button onclick="terminarLibro()">Terminar libro actual</button>';
    document.getElementById("info").innerHTML=info;
};
function ultimoLibroMostrar(){
    let libro=lista.lastBookRead;
    if(libro==undefined)
        return " No se ha leido ninguno aún";
    else
        return libro.title;
};
function siguienteLibroMostrar(){
    let libro=lista.nextBookToRead;
    if(libro==undefined)
        return " No hay más libros";
    else
        return libro.title;
};
function actualLibroMostrar(){
    let libro=lista.currentBook;
    if(libro==undefined)
        return " No se está leyendo ningun libro";
    else
        return libro.title;
};

window.terminarLibro=function (){
    lista.finishCurrentBook();
    mostrarTabla();
}