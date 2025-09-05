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
    const card = document.createElement("div");
    card.className = "card";
    const cardTitle = document.createElement("div");
    cardTitle.id = "cardTitle";
    cardTitle.textContent = name;
    const cardAuthor = document.createElement("div");
    cardAuthor.id = "author";
    cardAuthor.textContent = `- ${author}`;
    const secondHalf = document.createElement("div");
    secondHalf.className = "secondHalf";
    const cardLength = document.createElement("div");
    cardLength.id = "cardLength";
    cardLength.textContent = `Length : ${length}`;
    const cardRead = document.createElement("div");
    cardRead.id = "cardRead";
    cardRead.textContent = `Read Status: ${read}`;
    secondHalf.appendChild(cardLength);
    secondHalf.appendChild(cardRead);  
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);  
    card.appendChild(secondHalf);  
    const btnHolder = document.createElement("div");
    btnHolder.className = "btnHolder";
    let btn = document.createElement("button");
    btn.textContent = "Remove";
    btnHolder.appendChild(btn);
    card.appendChild(btnHolder);
    let cardContainer = document.querySelector('.cardContainer');
    cardContainer.appendChild(card);
    btn.addEventListener("click", ()=>{
        const index = myLib.indexOf(b);
        if (index > -1) {
            myLib.splice(index, 1);
        }
        card.remove();
    });
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

const addBookBtn = document.getElementById("addBookBtn");
const formPopup = document.getElementById("formPopup");
const closeForm = document.getElementById("closeForm");
const bookForm = document.getElementById("bookForm");

// Open form
addBookBtn.addEventListener("click", () => {
  formPopup.style.display = "flex"; // show popup
});

// Close form
closeForm.addEventListener("click", () => {
  formPopup.style.display = "none";
});

// Handle form submit
bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("bookName").value;
  const author = document.getElementById("bookAuthor").value;
  const length = document.getElementById("bookLength").value;
  const read = document.getElementById("bookRead").value;

  addBookToLibrary(name, author, length, read); // ✅ call your existing function

  bookForm.reset();              // clear form
  formPopup.style.display = "none"; // close popup
});
