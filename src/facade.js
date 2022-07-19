/*
function getFetch(url, params = {}) {
  const queryString = Object.entries(params).map(
    param => `${param[0]}:${param[1]}`
  );

  return fetch(`${url}?${queryString}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(res => res.json());
}
*/

console.log(axios);

function getFetch(url, params = {}) {
  return axios(url, {
    method: "GET",
    params,
  }).the(res => res.data);
}

/*
function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(res => res.json());
}
*/

const getUsers = () => getFetch("https://jsonplaceholder.typicode.com/users");

/*
function getUserPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(res => res.json());
}
*/

const getUserPosts = userId =>
  getFetch("https://jsonplaceholder.typicode.com/posts", { userId });

getUsers().then(users => {
  users.forEach(user => {
    getUserPosts(user.id).then(posts => {
      console.log(user.name);
      console.log(posts.length);
    });
  });
});
