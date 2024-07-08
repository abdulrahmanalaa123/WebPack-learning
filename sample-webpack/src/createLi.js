let counter = 1;
function createLi(data) {
  const div = document.getElementById("posts");
  const ul = document.createElement("ul");
  ul.classList.add("actualList");
  const count = document.createElement("p");
  count.innerHTML = counter;
  ul.appendChild(count);
  for (const element of data) {
    const newLi = document.createElement("li");
    newLi.innerHTML = `${element.id},${element.title} `;
    ul.appendChild(newLi);
  }
  div.replaceChildren(ul);
  counter = counter + 1;
}

export default createLi;
