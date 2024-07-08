import getPosts from "./getPosts";
import createLi from "./createLi";
import "./index.css";

import firstImage from "./assets/img_5terre.jpg";
import secondImage from "./assets/img_forest.jpg";
import thirdImage from "./assets/img_lights.jpg";
import fourthImage from "./assets/img_mountains.jpg";

const button = document.getElementById("postsButton");
const image1 = document.getElementById("image1");
const image1Ref = document.getElementById("image1Ref");
const image2 = document.getElementById("image2");
const image2Ref = document.getElementById("image2Ref");
const image3 = document.getElementById("image3");
const image3Ref = document.getElementById("image3Ref");
const image4 = document.getElementById("image4");
const image4Ref = document.getElementById("image4Ref");

image1.src = firstImage;
image1Ref.href = firstImage;
image2.src = secondImage;
image2Ref.href = secondImage;
image3.src = thirdImage;
image3Ref.href = thirdImage;
image4.src = fourthImage;
image4Ref.href = fourthImage;

button.addEventListener("click", async () => {
  const data = await getPosts();
  createLi(data);
});
