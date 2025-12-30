// https://jsonplaceholder.typicode.com/users/1/todos

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }
  //   GET Request
  get(url, callback) {
    this.xhr.open("GET", url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Bir hata oluştu!", null);
      }
    };
    this.xhr.send();
  }
  // POST Request
  post(url, data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        callback(null, this.xhr.responseText);
      } else {
        callback("herhangi bir hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }
}

const request = new Request();
// request.get(
//   "https://jsonplaceholder.typicode.com/users/1/todos",
//   function (err, response) {
//     if (err === null) {
//       console.log(response);
//     } else {
//       console.log(err);
//     }
//   }
// );

request.post(
  "https://jsonplaceholder.typicode.com/users/1/todos",
  { userID: 2, title: "For Example" },
  function (err, response) {
    if (err === null) {
      console.log(response);
    } else {
      console.log(err);
    }
  }
);
