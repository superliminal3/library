const cardsContainer = document.querySelector("#cards-container");
const body = document.querySelector("body");

const dialogOpen = document.querySelector("#dialog-open");
const dialogClose = document.querySelector("#dialog-close");
const dialog = document.querySelector("#dialog");

const i_title = document.querySelector("#i_title");
const i_author = document.querySelector("#i_author");
const i_pages = document.querySelector("#i_pages");
const submitBtn = document.querySelector("#submit-button");

const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

function destroyCards() {
    while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.lastChild);
    }
}

function addRemoveButton(pos, card) {
    let removeButtons = [];

    removeButtons[pos] = document.createElement("button");
    removeButtons[pos].addEventListener("click", () => {
        myLibrary.splice(pos, 1);
        destroyCards();
        spawnCards(myLibrary);
    });
    removeButtons[pos].setAttribute("class", "remove-button");
    removeButtons[pos].textContent = "remove";
    card.appendChild(removeButtons[pos]);
}

function addReadButton(pos, card) {
    let readButton = [];

    readButton[pos] = document.createElement("button");
    readButton[pos].addEventListener("click", () => {
        myLibrary[pos].read ?
            myLibrary[pos].read = false:
            myLibrary[pos].read = true;
        destroyCards();
        spawnCards(myLibrary);
    });
    readButton[pos].textContent = "change status";

    card.appendChild(readButton[pos]);
}

function spawnCards(arr) {
    function spawnCard(bookObj, pos) {
        const card = document.createElement("div");
        
        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const read = document.createElement("div");

        readStatus = bookObj.read ? "read" : "not read";

        title.textContent = bookObj.title;
        author.textContent = bookObj.author;
        pages.textContent = bookObj.pages;
        read.textContent = readStatus;
        
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        
        card.setAttribute("class", "card");

        cardsContainer.appendChild(card);

        addRemoveButton(pos, card);
        addReadButton(pos, card);
    }
    arr.forEach(spawnCard);
}

function clearInputs() {
    i_title.value = "";
    i_author.value = "";
    i_pages.value = "";
}

dialogOpen.addEventListener("click", () => {
    dialog.showModal();
});

dialogClose.addEventListener("click", () => {
    dialog.close();
    clearInputs();
});

submitBtn.addEventListener("click", () => {
    addBookToLibrary(i_title.value, i_author.value, i_pages.value);
    destroyCards();
    spawnCards(myLibrary);
    clearInputs();
    dialog.close();
});

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295");
addBookToLibrary("Galaxy in Flame", "Dan Abnett", "416");
addBookToLibrary("The Flight of the Eisenstein", "James Swallow", "420");

spawnCards(myLibrary);
