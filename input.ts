function getInfo() {
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;

  const name = nameInput.value;
  const password = passwordInput.value;
  const email = emailInput.value;

  console.log("Name:", name);
  console.log("Password:", password);
  console.log("Email:", email);
}
