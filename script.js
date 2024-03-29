let json = `[{
    "title": "Stark",
    "image": "img/Stark.jpg",
    "character": "Iron Man",
    "name": "Tony Stark",
    "superpowers": "intelligence"
},{
    "title": "Cap",
    "image": "img/Cap.jpg",
    "character": "Captain America",
    "name": "Stephen Rogers",
    "superpowers": "strength,<br> endurance,<br> regeneration"
},{
    "title": "Natasha",
    "image": "img/Natasha.jpg",
    "character": "Black Widow",
    "name": "Natasha Romanoff",
    "superpowers": "spy"
},{
    "title": "Thor",
    "image": "img/Thor.jpg",
    "character": "Thor",
    "name": "Thor Odinson",
    "superpowers": "the power of a god, <br> the hammer Mjolnir"
},{
    "title": "Banner",
    "image": "img/Benner.jpg",
    "character": "Hulk",
    "name": "Bruce Banner",
    "superpowers": "intelligence,<br> superhuman strength,<br> flight"
},{
    "title": "Hawkeye",
    "image": "img/Hawkeye.jpg",
    "character": "Hawkeye",
    "name": "Clint Barton",
    "superpowers": "great shooter,<br> Natasha's best friend"
}]`;

document.addEventListener("DOMContentLoaded", function(event) {
    let cards = JSON.parse(json);

    let cardsContent = "";
    for (let card of cards) {
        cardsContent += `<div class='card'>
        <h2>${card.title}</h2>
        <img src="${card.image}" />
        <h3>${card.character}</h3>
        <h3>${card.name}</h3>
        <h4>${card.superpowers}</h4>
        </div>`;
    }
    document.getElementById("cardsContainer").innerHTML = cardsContent
});