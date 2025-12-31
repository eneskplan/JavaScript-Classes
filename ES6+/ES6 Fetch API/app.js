function getTextFile() {
  fetch("example.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

function getJsonFile() {
  fetch("example.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

// https://v6.exchangerate-api.com/v6/fc51eec1220ec8a5cb6b25c3/latest/USD

function getExternalAPI(){
    fetch("https://v6.exchangerate-api.com/v6/fc51eec1220ec8a5cb6b25c3/latest/USD")
    .then(response => response.json())
    .then(data => console.log(data.conversion_rates.TRY))
    .catch(err => console.log(err))
    
}

getExternalAPI();
// getTextFile();
// getJsonFile();
