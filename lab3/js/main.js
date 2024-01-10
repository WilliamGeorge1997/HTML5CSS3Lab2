let nameInput = document.getElementById("nameInput");
let ageInput = document.getElementById("ageInput");
let submitBtn = document.getElementById("submitBtn");


let usersContainer = [];
if (localStorage.getItem("users") != null) {
  usersContainer = JSON.parse(localStorage.getItem("users"));
}

function addUser() {
 if(nameInput.value && ageInput){
  let user = {
    name:nameInput.value,
    age:ageInput.value
  };
  usersContainer.push(user);
  localStorage.setItem("users",JSON.stringify(usersContainer));
  location.assign("../users.html")

 }else{
  return
 }
}

submitBtn.addEventListener("click", () => {
  addUser();
});

console.log(usersContainer);