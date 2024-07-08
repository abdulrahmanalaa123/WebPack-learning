async function getPosts() {
  const data = (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();
  return data;
}

export default getPosts;
