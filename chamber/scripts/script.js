const currentDate = new Date();

const fullDate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(currentDate);
document.querySelector(".date").innerHTML = fullDate;

const currentYear = currentDate.getFullYear();
document.querySelector(".current-year").innerHTML = currentYear;

const lastModified = document.lastModified;
document.querySelector(".last-modified").innerHTML = lastModified;
