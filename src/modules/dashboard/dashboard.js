'use strict';


export default angular
    .module('dashboard', [

        require('./controllers/dashboard.controller').name,
        require('./directives/dashboard.example.directive').name
        
    ]);