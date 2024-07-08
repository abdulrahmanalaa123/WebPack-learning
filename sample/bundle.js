import createLi from "./createLi.js";
import getPosts from "./getPosts.js";

const button = document.getElementById("postsButton");
button.addEventListener("click", async () => {
  const data = await getPosts();
  createLi(data);
});
