let currentYear = new Date().getFullYear();
document.querySelector(".current-year").innerHTML = currentYear;

let lastModified = document.lastModified;
document.querySelector(".last-modified").innerHTML = lastModified;

// W09 JSON Data and the Fetch API

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphet);
    });

function displayProphet(prophet) {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let portrait = document.createElement('img');

    name.textContent = `${prophet.name} ${prophet.lastname}`;

    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

    let ordinal = getOrdinal(prophet);

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${ordinal} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(name);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    document.querySelector('div.cards').appendChild(card);
}

function getOrdinal(prophet) {
    let ordinal;
    switch (prophet.order) {
        case 1:
            ordinal = "st"
            break;
        case 2:
            ordinal = "nd"
            break;
        case 3:
            ordinal = "rd"
            break;
        default:
            ordinal = "th"
            break;
    }

    return (prophet.order + ordinal)
}