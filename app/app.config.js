angular
  .module('exampleApp')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<home></home>'
      })
      .when('/battle-royale', {
        template: '<battle-royale></battle-royale>'
      })
      .when('/other', {
        template: '<other></other>'
      })
      .otherwise('/')
  }])