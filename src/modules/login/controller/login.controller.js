'use strict';

import 'assets/styles/login.scss';


class LoginController {
    constructor(commonService, $state) {

        var vm = this;
        vm.userLogin ={}
        this.commonService = commonService;
        this.$state = $state;
    }

    onLogin(){
        localStorage.setItem("token","dsfsdfsdfsdf4sdhg783sdsdf");
        this.$state.go("dashboard")
    }

}

export default angular
    .module('login.controller', [])
    .controller('LoginController', ['commonService', '$state', LoginController]);

