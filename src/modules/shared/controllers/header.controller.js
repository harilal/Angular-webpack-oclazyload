'use strict';

class HeaderController {
    constructor($state) {
        let vm = this;
       this.$state = $state;
    }

   
    logout() {

        localStorage.clear();
        this.$state.reload();

    }
}

export default angular
    .module('shared.header.controller', [])
    .controller('HeaderController', ['$state', HeaderController]);
