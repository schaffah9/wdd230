const messageDisplay = document.querySelector(".visits");
const newVisitDate = new Date();
let lastVisitDate = new Date(window.localStorage.getItem("last-visit-date"));

let message;
let numVisits = Number(window.localStorage.getItem("visits-ls"));
if (!numVisits) {
    message = "Welcome! This is your first visit!";
    numVisits = 0;
}
else {
    let time = daysSinceLastVisit();
    if (time > 0) {
        message = `Welcome back! It's been ${time} days since your last visit`;
    }
    else {
        message = "Welcome back! Your last visit was earlier today."
    }
}
messageDisplay.textContent = message;

function daysSinceLastVisit() {
    let time = Math.floor((newVisitDate - lastVisitDate) / (24*60*60*1000));
    return time
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("last-visit-date", newVisitDate);



