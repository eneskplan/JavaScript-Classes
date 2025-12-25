//project.js
const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1]
const clearFilms = document.getElementById("clear-films")


// EventListeners

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded",function(){
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilms(films);
  })
  secondCardBody.addEventListener("click",deleteFilm)
  clearFilms.addEventListener("click",clearFilmsAll)
}

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    UI.displayMessages("Tüm alanları doldurunuz", "danger");
  } else {
    
    const newFilm = new Film(title, director, url); // New Film
    
    UI.addFilmToUI(newFilm); // add film for ui

    
    Storage.addFilmToStorage(newFilm);// add film for localstorage

    UI.displayMessages("Film başarıyla Eklendi", "success");
  }

  UI.clearInputs(titleElement, directorElement, urlElement);

  e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target)
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        UI.displayMessages("Film ya da Dizi kaldırıldı","danger")
    }
}

function clearFilmsAll(e){
  if(confirm("Emin misiniz")){
      UI.clearFilmsFromUI();
      Storage.clearFilmsFromStorage();
  }
}