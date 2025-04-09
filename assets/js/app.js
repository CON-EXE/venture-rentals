'use strict';

const { log } = console;

import * as utils from './utils.js';

const loginButton = utils.select()
const loginSection = utils.select('.log-in');
const username = utils.select('.username');
const password = utils.select('.password');

function validUser() {
    if (username.value != '') {
        return true;
    } else {
        return false;
    }
}

function validPass() {

}

utils.listen('log-in')