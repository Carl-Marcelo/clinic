var clinicApp = angular.module('clinicApp', ['ngRoute']);

clinicApp.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    title       : 'Login',
    controller  : 'loginController',
    templateUrl : 'login.html',
    role        : '0'
  })
  .when('/login', {
    title       : 'Login',
    controller  : 'loginController',
    templateUrl : 'login.html'  
  })
  .when('/logout', {
    title       : 'Logout',
    templateUrl : 'login.html'
  })
  .when('/home', {
    title       : 'Home',
    templateUrl : 'partials/admin/home.html'
  })
  .when('/admin-profile', {
    title       : 'Account',
    controller  : 'loginController',
    templateUrl : 'partials/admin/admin-profile.html'
  })
  .when('/view', {
    title       : 'RR Clinic',
    controller  : 'adminController',
    templateUrl : 'partials/admin/index.html'
  })
  .when('/add-patients', {
    title       : 'Add Patient',
    controller  : 'adminController',
    templateUrl : 'partials/admin/add-patients.html'
  })
  
  .otherwise({ redirectTo : '/login' });
});