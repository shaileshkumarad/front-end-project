const locations = ["India", "United States", "Vietnam", "France", "Australia", "Japan", "South Africa", "China", "Egypt"];
let index = 0;

function changeLocation() {
  document.getElementById('location').textContent = locations[index];
  index = (index + 1) % locations.length;
}

setInterval(changeLocation, 600); 


const howMany = document.getElementById("howMany");
const fromDateInput = document.getElementById("fromDate");
const toDateInput = document.getElementById("toDate");
const textArea = document.getElementById("textArea");
const form = document.querySelector("form");
const whereTo = document.getElementById("whereTo");

var todayDate = new Date();

var tDate = todayDate.getDate();
var month = todayDate.getMonth() + 1;
var year = todayDate.getFullYear();

if (month < 10) {
  month = "0" + month;
}
if (tDate < 10) {
  tDate = "0" + tDate;
}

var minDate = year + "-" + month + "-" + tDate;

fromDateInput.setAttribute("min", minDate);

function getDate() {
  var fromDate = fromDateInput.value;
  toDateInput.setAttribute("min", fromDate);
}
fromDateInput.addEventListener("input", function () {
  toDateInput.removeAttribute("disabled");
});

function onSubmit(event) {
  event.preventDefault();
  if (
    whereTo.value !== "" &&
    howMany.value !== "" &&
    fromDateInput.value !== "" &&
    toDateInput.value !== "" 
  ) {
    window.alert("Booking Successful");
    whereTo.value = "";
    howMany.value = "";
    fromDateInput.value = "";
    toDateInput.value = "";
    textArea.value = "";
  }
}
form.addEventListener("submit", onSubmit);




// Modal Validation

function validateForm() {
  // Get form elements
  const nameInput = document.getElementById("registerName");
  const emailInput = document.getElementById("registerEmail");
  const passwordInput = document.getElementById("registerPass");
  const dobInput = document.getElementById("registerDob");
  const numberInput = document.getElementById("registerNumber");

  // Check for empty fields
  if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "" || dobInput.value === "") {
    alert("Please fill in all required fields.");
    return false; // Prevent form submission
  }

  // Check for valid email format (basic check)
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Check for minimum password length
  if (passwordInput.value.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  // Check for minimum password length
  if (numberInput.value.length < 10) {
    alert("Mobile Number must be at least 10 characters long.");
    return false;
  } else {
    alert("Registration Successful!");
    $("#registerModal").modal("hide");
  }

  return true;
}



function validateLoginForm() {
  // Get form elements
  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPass");

  // Check for empty fields
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Please fill in all required fields.");
    return false; // Prevent form submission
  }

  // Check for valid email format (basic check)
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Check for minimum password length
  if (passwordInput.value.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  } else {
    alert("Login Successful!");
    $("#loginModal").modal("hide");
  }

  return true;
}




