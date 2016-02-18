/**
 *
 * AngularJS Boilerplate
 * @description           Description
 * @author                Jozef Butko // www.jozefbutko.com/resume
 * @url                   www.jozefbutko.com
 * @version               1.1.7
 * @date                  March 2015
 * @license               MIT
 *
 */
;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('george', [
      'ngResource',
      'ngMessages',
      'ngAnimate',
      'toastr',
      'ui.router',
      'ui.bootstrap',
      'ngFileUpload',
      'wu.masonry'
    ])
    .config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$httpProvider', '$compileProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($httpProvider, $compileProvider, $stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'views/home.html',
      });

      //$locationProvider.html5Mode(true);  // Need to inject locationProvider if enabled

    $urlRouterProvider.otherwise('/');
  }


  /**
   * Run block
   */
  /*angular
    .module('issuefy')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {

    // put here everything that you need to run on page load
  }*/

})();
