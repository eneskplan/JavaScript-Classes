// Select Elements

const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github(); // Github object
const ui = new UI();
eventListeners();

function eventListeners() {
  githubForm.addEventListener("submit", getData);
  clearLastUsers.addEventListener("click", clearAllSearched);
  document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(e) {
  // Tüm arananları temizle
  let username = nameInput.value.trim();
  if (username === "") {
    alert("Lütfen geçerli bir kullanıcı adı giriniz !");
  } else {
    github
      .getGithubData(username)
      .then((response) => {
        if (response.user.message === "Not Found") {
         ui.showError("Kullanıcı bulunamadı")
        } 
        else {
            ui.showUserInfo(response.user);
            ui.showRepoInfo(response.repo);
        }
      })
      .catch((err) => ui.showError(err));
  }
  ui.clearInput();
  e.preventDefault();
}

function clearAllSearched() {
  // Arananları storagedan al ve UI'ye ekle
}

function getAllSearched() {}
