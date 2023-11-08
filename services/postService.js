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
  const token = localStorage.getItem('token')
  const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` }
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
  const token = localStorage.getItem('token')
  const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` }
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
  const token = localStorage.getItem('token')
  const headers = { "Authorization": `Bearer ${token}` }
  const response = await fetch(URL + "post/delete/" + id, { method: 'POST', headers });
  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    console.error("Post not deleted");
  }
  return null;
};

const sendMailNotification = async (firstName, lastName, email, subject, message) => {
  const headers = {'Content-Type': 'application/json'}
  const body = JSON.stringify({ firstName, lastName, email, subject, message });
  const response = await fetch(URL + "contacts", { method: 'POST', headers, body });
  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    console.error("Something went wrong");
  }
  return null;
};







