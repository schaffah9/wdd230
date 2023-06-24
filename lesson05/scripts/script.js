let currentYear = new Date().getFullYear();
document.querySelector(".current-year").innerHTML = currentYear;

let lastModified = document.lastModified;
document.querySelector(".last-modified").innerHTML = lastModified;

// W05 DOM Manipulation Activity

const input = document.querySelector("input");
const submitButton = document.querySelector("button");
const list = document.querySelector("ul");

submitButton.addEventListener("click", () => {
	let value = input.value.trim()
	if (value.length > 0) {
		const listItem = document.createElement("li");
		const deleteButton = document.createElement("button");

		listItem.textContent = value;
		deleteButton.textContent = "❌";

		listItem.append(deleteButton);
		list.append(listItem);

		deleteButton.addEventListener("click", () => {
			list.removeChild(listItem);
		});

		input.value = "";
		input.focus();
	}
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitButton.click();
  }
});
