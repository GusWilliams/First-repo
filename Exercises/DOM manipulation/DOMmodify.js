const orderedList = document.querySelector("ol");

const liOfUl = orderedList.children;

for (let li of liOfUl) {
	li.style.backgroundColor = "green";
}
