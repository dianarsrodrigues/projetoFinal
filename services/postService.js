const URL = "http://localhost:3000/";

const getPosts = async () => {
  const response = await fetch(URL + "posts");
  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    console.error("Something went wrong");
  }

  return [];
};
