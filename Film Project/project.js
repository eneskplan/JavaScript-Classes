//project.js
const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1]

// UI Object
const ui = new UI();

// Storage Object
const storage = new Storage();

// EventListeners

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded",function(){
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  })
  secondCardBody.addEventListener("click",deleteFilm)
}

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    ui.displayMessages("Tüm alanları doldurunuz", "danger");
  } else {
    
    const newFilm = new Film(title, director, url); // New Film
    
    ui.addFilmToUI(newFilm); // add film for ui

    
    storage.addFilmToStorage(newFilm);// add film for localstorage

    ui.displayMessages("Film başarıyla Eklendi", "success");
  }

  ui.clearInputs(titleElement, directorElement, urlElement);

  e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id=== "delete-film"){
        ui.deleteFilmFromUI(e.target)
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.displayMessages("Film ya da Dizi kaldırıldı","danger")
    }
}