const course = [
  {
    Name: "React js course",
    Price: "400",
  },
  {
    Name: "Django",
    Price: "1000",
  },
  {
    Name: "Nodejs course",
    Price: "500",
  },
  {
    Name: "TypeScript course",
    Price: "600",
  },
];
function generateList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";

  course.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.Name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const price = document.createTextNode(course.Price);
    span.appendChild(price);
    li.appendChild(span);
    ul.appendChild(li);
  });
}
window.addEventListener("load", generateList);
const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
  course.sort((a, b) => a.Price - b.Price);
  generateList();
});
const unsort = document.querySelector(".btn-primary");
unsort.addEventListener("click", () => {
  course.sort((a, b) => b.Price - a.Price);
  generateList();
});
