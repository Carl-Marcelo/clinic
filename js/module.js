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
    controller  : 'adminController',
    templateUrl : 'login.html'
  })
  // .when('/home', {
  //   title       : 'Home',
  //   templateUrl : 'partials/admin/home.html'
  // }) z
  .when('/schedule', {
    title       : 'Home',
    controller  : 'adminController',
    templateUrl : 'partials/admin/schedule.html'
  })
  // .when('/admin-profile', {
  //   title       : 'Account',
  //   controller  : 'loginController',
  //   templateUrl : 'partials/admin/admin-profile.html'
  // })
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
  .when('/history', {
    title       : 'Patient History',
    controller  : 'adminController',
    templateUrl : 'partials/admin/history.html'
  })
  
  .otherwise({ redirectTo : '/login' });
});