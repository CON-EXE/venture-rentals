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