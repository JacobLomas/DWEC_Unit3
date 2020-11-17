export class Book{
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

export class BookList{
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
        if(this.currentBook!=undefined)
        this.currentBook.setRead();
    }   
};

