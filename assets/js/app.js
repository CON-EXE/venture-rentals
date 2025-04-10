'use strict';

const { log } = console;

import * as utils from './utils.js';

const loginNav = utils.select('.login-nav');
const loginScreen = utils.select('.login-container');
const loginButton = utils.select('.login-button');
const username = utils.select('.username');
const password = utils.select('.password');
const exit = utils.select('.exit');

function validUser() {
    if (username.value != '') {
        return true;
    } else {
        return false;
    }
}

function validPass() {
    if (password.value != '') {
        return true;
    } else {
        return false;
    }
}

utils.listen('click', loginNav, () => {
    loginScreen.classList.remove('hide');
});

utils.listen('click', exit, () => {
    loginScreen.classList.add('hide');
});

utils.listen('click', loginButton, () => {
   if (validUser() && validPass()) {
    loginScreen.classList.add('hide');
   }
});

// Start contact us page 
const form = document.querySelector(".form");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const phoneInput = document.querySelector(".phone");
const messageInput = document.querySelector(".msg");
const nameErr = document.querySelector(".name-err");
const emailErr = document.querySelector(".email-err");
const phoneErr = document.querySelector(".phone-err");  
const msgErr = document.querySelector(".msg-err");
const successMsg = document.querySelector(".ok");

function showError(input, errorSpan, message) {
  input.style.borderColor = "red";
  errorSpan.textContent = message;
}

function clearError(input, errorSpan) {
  input.style.borderColor = "";
  errorSpan.textContent = "";
}

function validateName() {
  const value = nameInput.value.trim();
  if (value === "") {
    showError(nameInput, nameErr, "Name is required.");
    return false;
  }
  clearError(nameInput, nameErr);
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();
  if (value === "") {
    showError(emailInput, emailErr, "Email is required.");
    return false;
  } else if (!value.includes("@") || !value.includes(".")) {
    showError(emailInput, emailErr, "Invalid email.");
    return false;
  }
  clearError(emailInput, emailErr);
  return true;
}

function validatePhone() {
  const value = phoneInput.value.trim();
  if (value && isNaN(value)) { 
    showError(phoneInput, phoneErr, "Phone number must contain only numbers.");
    return false;
  }
  clearError(phoneInput, phoneErr);
  return true;
}

function validateMessage() {
  const value = messageInput.value.trim();
  if (value === "") {
    showError(messageInput, msgErr, "Message is required.");
    return false;
  }
  clearError(messageInput, msgErr);
  return true;
}

function handleSubmit(e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone(); 
  const isMsgValid = validateMessage();

  if (isNameValid && isEmailValid && isPhoneValid && isMsgValid) {
    successMsg.style.display = "block";
    form.reset();
    [nameInput, emailInput, phoneInput, messageInput].forEach(input => input.style.borderColor = "");
  } else {
    successMsg.style.display = "none";
  }
}

form.addEventListener("submit", handleSubmit);
// End contact us page
