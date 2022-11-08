const form = document.querySelector("form");
const list = document.querySelector("#list");
let toDoArr = [];
// localStorage.setItem("arrayTest", JSON.stringify(arr));

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const input = document.querySelector("#add-task");
	const newTask = document.createElement("li");
	const checkBox = document.createElement("button");
	newTask.innerText = input.value;
	checkBox.innerText = "Remove";
	list.append(newTask);
	newTask.append(checkBox);
	toDoArr.push({
		name: input.value,
		complete: false,
	});
	localStorage.setItem("toDoList", JSON.stringify(toDoArr));
	form.reset();
});

list.addEventListener("click", function (event) {
	if (event.target.tagName === "BUTTON") {
		event.target.parentElement.remove();
		let task = event.target.parentElement.childNodes[0].data;
		let index = toDoArr.findIndex((object) => {
			return object.name == task;
		});
		toDoArr.splice(index, 1);
		localStorage.setItem("toDoList", JSON.stringify(toDoArr));
	}
});
list.addEventListener("click", function (evt) {
	if (evt.target.tagName === "LI") {
		// console.log("you clicked an li");
		evt.target.style.textDecoration = "line-through";
		let task = evt.target.childNodes[0].data;
		let index = toDoArr.findIndex((object) => {
			return object.name == task;
		});

		toDoArr[index].complete = true;
		localStorage.setItem("toDoList", JSON.stringify(toDoArr));
	}
});

if (localStorage.getItem("toDoList")) {
	toDoArr = JSON.parse(localStorage.getItem("toDoList"));
}

for (let task in toDoArr) {
	const newTask = document.createElement("li");
	const checkBox = document.createElement("button");
	newTask.innerText = toDoArr[task].name;
	checkBox.innerText = "Remove";
	list.append(newTask);
	newTask.append(checkBox);
	if (toDoArr[task].complete) {
		newTask.style.textDecoration = "line-through";
	}
	form.reset();
}
