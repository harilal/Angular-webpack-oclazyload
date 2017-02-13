'use strict';
import 'assets/styles/dashboard.scss';

class DashboardController {

    constructor(commonService) {
        let vm = this;
        console.log(_.isNaN(vm));
    }

}

export default angular
    .module('dashboard.controller', [])
    .controller('DashboardController', ['commonService', DashboardController]);