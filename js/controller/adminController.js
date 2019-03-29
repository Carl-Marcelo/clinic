clinicApp.controller('adminController', function ( $scope, ClinicFactory ) {

  $scope.patients_form = {};  
  $scope.patients = [];

  $scope.view_data = {};
  $scope.update_data = {};
  $scope.delete_data = {};

  patients();

  $scope.add_patients = function () {
    var promise = ClinicFactory.add_patients($scope.patients_form);

    promise.then( function (data) {  
      swal(
        "Data Saved",
        "Successfully Stored",
        "success"
      );
      $scope.patients_form = {};
    })
    .then(null, function(data) {
      swal(
        "Failed to save",
        "Try Again",
        "error"        
      );
    });
  };

  $scope.delete_patients = function (value) {
    var x = true;

    if ( x == true) {
      $('#delete-modal').modal('hide');
    } else {
      patients();
    }

    var promise = ClinicFactory.delete_patients($scope.delete_data);
  
    promise.then( function (data) {
      swal(
        "Data Deleted",
        "Successfully Deleted",
        "success"
      )
      patients();
    })
    .then(null, function (data) {  
      swal(
        "Error",
        "No data to delete",
        "warning"
      );
    });
  };

  $scope.data_delete = function (key) {
    $scope.delete_data = $scope.patients[key];
  };

  $scope.delete_cancel = function () { 
    swal(
      "Cancelled",
      "Data Delete Cancelled",
      "error"
    );
    $('#delete-modal').modal('hide');
    patients();
  };

  $scope.update_patients = function (value) {
    var promise = ClinicFactory.update_patients($scope.update_data);

    promise.then( function () {
      swal(
        "Data Updated",
        "Successfully Updated",
        "success"
      );
      $('#update-modal').modal('hide');
      patients();
    })
    .then(null, function () {
      swal(
        "Update Failed",
        "Failed to Update",
        "error"
      );
    });
  };

  $scope.data_update = function (key) {
    $scope.update_data = $scope.patients[key];
    patients();
  }

  $scope.update_cancel = function () {  
    swal(
      "Cancelled",
      "Data Update Cancelled",
      "error"      
    );
    $('#update-modal').modal('hide');
  };

  $scope.get_patients = function (value) {
    var promise = ClinicFactory.get_patients($scope.view_data);

  }

  $scope.data_view = function (key) {
    $scope.view_data = $scope.patients[key];
  };

  function patients() {
    var promise = ClinicFactory.fetch_patients();

    promise.then( function (data) {
      $scope.patients = data.data.result;
    })
    .then(null, function(data) {
      patients();
    });
  };
});