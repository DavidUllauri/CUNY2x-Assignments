function formValidation() {
  var x = document.forms["myForm"]["password"].value;
  if (x == "12345678") {
    document.getElementById("correct").innerHTML = "Correct";
    return false;
  } else {
    alert("password incorect");
  }
}
