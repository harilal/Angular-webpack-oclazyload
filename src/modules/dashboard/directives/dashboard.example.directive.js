export default class DashboardDirective {
  constructor() {
    this.template = '<div>{{ctrl.name}}</div>';
    this.restrict = 'E';
    this.scope = {};
        
    this.controller = () => new DashboardDirectiveController();
    this.controllerAs = 'ctrl';
    this.bindToController = true;
  }

  // Directive compile function
  compile() {
		
  }
    
  // Directive link function
  link() {

    alert("test");
		
  }
}

// Directive's controller
class DashboardDirectiveController {
  constructor () {
    this.name = 'sheshu dashboard inner directive';

  }
}

export default angular
  .module('dashboard.directives', [])
  .directive('dashboardDirective', () => new DashboardDirective());