const cardsContainer = document.querySelector("#cards-container");

const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

function spawnCards(arr) {
    function spawnCard(bookObj) {
        const card = document.createElement("div");
        
        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");

        title.textContent = bookObj.title;
        author.textContent = bookObj.author;
        pages.textContent = bookObj.pages;
        
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        
        card.setAttribute("style", "display: flex; justify-content: center; align-items: center; flex-direction: column;");
        card.setAttribute("class", "card");

        cardsContainer.appendChild(card);
    }
    arr.forEach(spawnCard);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295");
addBookToLibrary("Galaxy in Flame", "Dan Abnett", "416");
addBookToLibrary("The Flight of the Eisenstein", "James Swallow", "420");

spawnCards(myLibrary);
