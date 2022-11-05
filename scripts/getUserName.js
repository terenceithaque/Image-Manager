function getUserName(name) {
  // Enregistrer localement le nom du nouvel utilisateur
  window.localStorage.getItem("user", name);
  console.log(userName);
}
