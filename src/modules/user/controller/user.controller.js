'use strict';

//import '../styles/profile.scss';

class UserController {


    constructor(commonService, $state) {

        this.commonService = commonService;

    }



}

export default angular
    .module('user.controller', [])
    .controller('UserController', ['commonService', '$state', UserController]);
