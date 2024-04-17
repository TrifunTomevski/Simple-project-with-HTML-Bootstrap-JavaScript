// Button pagination
let loadMoreBtn = document.querySelector("#load-more");
let currentCards = 6;

loadMoreBtn.onclick = () => {
    let cards = [...document.querySelectorAll(".cards")];
    for (let i = currentCards; i < currentCards + 6; i++) {
        if (cards[i]) {
            cards[i].style.display = "inline-block";
        }
    }
    currentCards += 6;
    if (currentCards >= cards.length) {
        loadMoreBtn.style.display = "none";
    }
};

// Cards filtration
document
    .querySelector("#filter-marketing")
    .addEventListener("change", filterMarketing);
document
    .querySelector("#filter-coding")
    .addEventListener("change", filterCoding);
document
    .querySelector("#filter-design")
    .addEventListener("change", filterDesign);

function filterMarketing() {
    hideAllCards();
    if (document.querySelector("#filter-marketing").checked) {
        const marketingCards = document.querySelectorAll(".marketing");
        marketingCards.forEach((marketingCard) => {
            marketingCard.style.display = "inline-block";
        });
        document.querySelector("#filter-coding").checked = false;
        document.querySelector("#filter-design").checked = false;
    } else {
        showAllCards();
    }
}

function filterCoding() {
    hideAllCards();
    if (document.querySelector("#filter-coding").checked) {
        const codingCards = document.querySelectorAll(".coding");
        codingCards.forEach((codingCard) => {
            codingCard.style.display = "inline-block";
        });
        document.querySelector("#filter-marketing").checked = false;
        document.querySelector("#filter-design").checked = false;
    } else {
        showAllCards();
    }
}

function filterDesign() {
    hideAllCards();
    if (document.querySelector("#filter-design").checked) {
        const designCards = document.querySelectorAll(".design");
        designCards.forEach((designCard) => {
            designCard.style.display = "inline-block";
        });
        document.querySelector("#filter-marketing").checked = false;
        document.querySelector("#filter-coding").checked = false;
    } else {
        showAllCards();
    }
}

// show all cards
function showAllCards() {
    const allCards = document.querySelectorAll(".cards");
    allCards.forEach((card) => {
        card.style.display = "inline-block";
    });
}

// close all cards
function hideAllCards() {
    const allCards = document.querySelectorAll(".cards");
    allCards.forEach((card) => {
        card.style.display = "none";
    });
}
