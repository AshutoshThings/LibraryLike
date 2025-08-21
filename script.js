const myLib = [];

function book(name, author, length, read){
    this.id = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.length = length;
    this.read = read;
}

function addBookToLibrary(name, author, length, read){
    const b = new book(name,author, length, read);
    myLib.push(b);
}

function printer(){
    let len = myLib.length;
    let i = 0;
    while(i<len){
        console.table(myLib[i]);
        i++;
    }
}

printer();
addBookToLibrary("Man's search for meaning", "Victor Frankl", 120, "NOPE");
addBookToLibrary("The Alchemist", "Paulo Coelho", 160, "YEP");
addBookToLibrary("Tuesday's with Morrie", "Mitch Albom", 220, "YEP");
addBookToLibrary("The Metamorphosis", "Franz Kafka", 90, "YEP");
printer();