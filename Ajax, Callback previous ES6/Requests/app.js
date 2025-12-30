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
        callback("Get request :  bir hata oluştu", null);
      }
    };
    this.xhr.send();
  }
  //   POST Request
  post(url, data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Post request :  bir hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }

  //   PUT Request

  put(url, data, callback) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-type", "application/json");

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Put request :  bir hata oluştu", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }

  //   DELETE Request
  delete(url, callback) {
    this.xhr.open("DELETE", url);
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, "Veri silme işlemi başarılı");
      } else {
        callback("Delete request :  bir hata oluştu", null);
      }
    };
    this.xhr.send();
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

// request.post(
//   "https://jsonplaceholder.typicode.com/users/1/todos",
//   { userID: 2, title: "For Example" },
//   function (err, response) {
//     if (err === null) {
//       console.log(response);
//     } else {
//       console.log(err);
//     }
//   }
// );

// request.put(
//   "https://jsonplaceholder.typicode.com/todos/3",
//   { userID: 2, title: "For Example", completed: false },
//   function (err, response) {
//     if (err === null) {
//       console.log(response);
//     } else {
//       console.log(err);
//     }
//   }
// );

// request.delete(
//   "https://jsonplaceholder.typicode.com/todos/3",
//   function (err, response) {
//     if (err === null) {
//       console.log(response);
//     } else {
//       console.log(err);
//     }
//   }
// );
