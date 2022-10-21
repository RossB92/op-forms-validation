function passwordCheck() {
  if (
    document.getElementById("password").value ==
    document.getElementById("confirm-password").value
  ) {
    document.getElementById("password").style.borderColor = "green";
    document.getElementById("confirm-password").style.borderColor = "green";
  } else {
    document.getElementById("password").style.borderColor = "red";
    document.getElementById("confirm-password").style.borderColor = "red";
  }
}

function validate() {
  return $("#password1").val() === $("#password2").val();
}
