let fullName = document.querySelector(".name");
let username = document.querySelector(".username");
let email = document.querySelector(".email");
let number = document.querySelector(".number");
let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".confirm__password");
let registerBtn = document.querySelector(".register-btn");
let noInformation = document.querySelector(".no__information");
let table = document.querySelector(".table");

registerBtn.addEventListener("click", (addInformation) => {
  if (!fullName.value.trim()) {
    return alert("Full nameni to'liq kiriting");
  }
  if (!username.value.trim()) {
    return alert("Usernameni to'liq kiriting");
  }
  if (!email.value.trim()) {
    return alert("Emailni to'liq kiriting");
  }
  if (!number.value.trim()) {
    return alert("Numberni to'liq kiriting");
  }
  if (!password.value.trim()) {
    return alert("Passwordni to'liq kiriting");
  }
  if (!confirmPassword.value.trim()) {
    return alert("Passwordni tasdiqlang");
  }

  if (password.value != confirmPassword.value) {
    return alert("parolni to`g`ri kiriting");
  }

  let tr = document.createElement("tr");
  let tdName = document.createElement("td");
  tdName.innerHTML = `${fullName.value}`;
  let tdUsername = document.createElement("td");
  tdUsername.innerHTML = `${username.value}`;
  let tdEmail = document.createElement("td");
  tdEmail.innerHTML = `${email.value}`;
  let tdNumber = document.createElement("td");
  tdNumber.innerHTML = `${number.value}`;
  let tdPassword = document.createElement("td");
  tdPassword.innerHTML = `${password.value}`;

  addInformation.preventDefault();

  table.append(tr);

  tr.append(tdName);
  tr.append(tdUsername);
  tr.append(tdEmail);
  tr.append(tdNumber);
  tr.append(tdPassword);

  noInformation.classList.add("remove__img");
  table.classList.add("show__table");
   return tr;
});
