let currentYear = new Date().getFullYear();
document.querySelector(".current-year").innerHTML = currentYear;

let lastModified = new Date(document.lastModified);
document.querySelector(".last-modified").innerHTML = lastModified;
