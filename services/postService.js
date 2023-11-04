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

const getPost = async (id) => {
  const response = await fetch(URL + "post/" + id);
  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    console.error("Post not exist");
  }

  return null;
};

const createPost = async (title, text) => {
  const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  const body = JSON.stringify({ title, text });
  const response = await fetch(URL + "post/new", { method: 'POST', headers, body });
  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    console.error("Post not created");
  }
  return null;
};

const updatePost = async (id, title, text) => {
  const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  const body = JSON.stringify({ title, text });
  const response = await fetch(URL + "post/update/" + id, { method: 'POST', headers, body });
  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    console.error("Post not updated");
  }
  return null;
};

const deletePost = async (id) => {
  const response = await fetch(URL + "post/delete/" + id, { method: 'POST'});
  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    console.error("Post not deleted");
  }
  return null;
};


