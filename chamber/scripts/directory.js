const companies = document.querySelector('#companies');
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

function showGrid() {
    companies.classList.add("directory-grid");
    companies.classList.remove("directory-list");
}

function showList() {
    companies.classList.add("directory-list");
	companies.classList.remove("directory-grid");
}

gridButton.addEventListener("click", showGrid);
listButton.addEventListener("click", showList);


