function createLi(data) {
  const ul = document.getElementById("posts");
  for (const element of data) {
    const newLi = document.createElement("li");
    newLi.innerHTML = `${element.id},${element.title} `;
    ul.appendChild(newLi);
  }
}

export default createLi;
