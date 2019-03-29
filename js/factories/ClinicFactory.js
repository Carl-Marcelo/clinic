clinicApp.factory('ClinicFactory', function($http) {

  var factory = {};

  factory.add_patients = function (data) {
    var promise = $http ({
      url: '././function/patients/add_patients.php',
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join('&');
      },
      data : data 
    })
    return promise;
  };

  factory.fetch_patients = function (data) {
    var promise = $http ({
      url: '././function/patients/fetch_patients.php',
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join('&');
      },
      data : data 
    })
    return promise;
  };

  factory.delete_patients = function (data) {
    var promise = $http ({
      url: '././function/patients/delete_patients.php',
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join('&');
      },
      data : data 
    })
    return promise;
  };

  factory.update_patients = function (data) {
    var promise = $http ({
      url: '././function/patients/update_patients.php',
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join('&');
      },
      data : data 
    })
    return promise;
  };

  factory.get_patients = function (data) {
    var promise = $http ({
      url: '././function/patients/get_patients.php',
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join('&');
      },
      data : data 
    })
    return promise;
  };

  return factory;
});