class Request {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}

const request = new Request();
// let albums;
// request
//   .get("https://jsonplaceholder.typicode.com/albums")
//   .then((albums) => console.log(albums))
//   .catch((err) => console.log(err));

request.post("https://jsonplaceholder.typicode.com/albums", {
  userId: 1,
  title: "Thriller",
})
.then(newAlbums => {
  console.log(newAlbums)
})
.catch(err => console.log(err))