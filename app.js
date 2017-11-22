angular.module('votaAndonio', ['ui.bootstrap', 'ngRoute', 'ngAnimate']);

angular.module('votaAndonio').config(function ($routeProvider) {

  /* Add New Routes Above */
  $routeProvider.otherwise({ redirectTo: '/home' });

});

angular.module('votaAndonio').run(function ($rootScope) {

  $rootScope.safeApply = function (fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof (fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});
