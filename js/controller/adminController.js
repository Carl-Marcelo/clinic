clinicApp.controller('adminController', function ( $scope, ClinicFactory ) {

  $scope.patients_form = {};  
  $scope.patients = [];

  $scope.view_data = {};
  $scope.update_data = {};
  $scope.delete_data = {};

  $scope.schedule_form = {};
  $scope.schedule = [];

  $scope.delete_sched_data = {};

  $scope.remarks_form = {};
  $scope.remarks = [];

  patients();
  schedule();
  remarks();

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

  $scope.update_patients = function (value) {
    var promise = ClinicFactory.update_patients($scope.update_data);

    promise.then( function () {
      swal(
        "Data Updated",
        "Successfully Updated",
        "success"
      );
      $('#update-modal').modal('hide');
      $('#update-confirm-modal').modal('hide');
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
    $('#update-confirm-modal').modal('hide');
  };

  $scope.logout = function () {
    var promise = ClinicFactory.logout();

    promise.then( function () {
      window.location.href = '#/login';
    })
    .then(null, function () {
      window.location.href = '#/login';
    });
  }

  $scope.get_patients = function (value) {
    var promise = ClinicFactory.get_patients($scope.view_data);
  }

  $scope.data_view = function (key) {
    $scope.view_data = $scope.patients[key];
  };

  $scope.add_schedule = function () {
    var promise = ClinicFactory.add_schedule($scope.schedule_form);

    promise.then( function (data) {  
      swal(
        "Data Saved",
        "Successfully Stored",
        "success"
      );
      $('#schedule-modal').modal('hide');
      $scope.schedule_form = {};
      schedule();
    })
    .then(null, function(data) {
      swal(
        "Failed to save",
        "Try Again",
        "error"        
      );
    });
  };

  $scope.delete_schedule = function (value) {
    var x = true;

    if ( x == true) {
      $('#delete-sched-modal').modal('hide');
    } else {
      schedule();
    }

    var promise = ClinicFactory.delete_schedule($scope.delete_sched_data);
  
    promise.then( function (data) {
      swal(
        "Data Deleted",
        "Successfully Deleted",
        "success"
      );
      $scope.schedule = [];
      schedule();
    })
    .then(null, function (data) {  
      swal(
        "Error",
        "No data to delete",
        "warning"
      );
    });
  };

  $scope.data_sched_delete = function (key) {
    $scope.delete_sched_data = $scope.schedule[key];
  };

  $scope.add_remarks = function () {
    var promise = ClinicFactory.add_remarks($scope.remarks_form);

    promise.then( function (data) {  
      swal(
        "Data Saved",
        "Successfully Stored",
        "success"
      );
      $scope.remarks_form = {};
      remarks();
      $('#remarks-modal').modal('hide');
    })
    .then(null, function(data) {
      swal(
        "Failed to save", 
        "Try Again",
        "error"        
      );
    });
  };

  function remarks() {
    var promise = ClinicFactory.fetch_remarks();

    promise.then( function (data) {
      $scope.remarks = data.data.result;
    })
    .then(null, function(data) {
      
    });
  };

  function patients() {
    var promise = ClinicFactory.fetch_patients();

    promise.then( function (data) {
      $scope.patients = data.data.result;
    })
    .then(null, function(data) {
      
    });
  };

  function schedule() {
    var promise = ClinicFactory.fetch_schedule();

    promise.then( function (data) {
      $scope.schedule = data.data.result;
    })
    .then(null, function () { 
      
    });
  }
});







  // $scope.delete_patients = function (value) {
  //   var x = true;

  //   if ( x == true) {
  //     $('#delete-modal').modal('hide');
  //   } else {
  //     patients();
  //   }

  //   var promise = ClinicFactory.delete_patients($scope.delete_data);
  
  //   promise.then( function (data) {
  //     swal(
  //       "Data Deleted",
  //       "Successfully Deleted",
  //       "success"
  //     )
  //     patients();
  //   })
  //   .then(null, function (data) {  
  //     swal(
  //       "Error",
  //       "No data to delete",
  //       "warning"
  //     );
  //   });
  // };

  // $scope.data_delete = function (key) {
  //   $scope.delete_data = $scope.patients[key];
  // };

  // $scope.delete_cancel = function () { 
  //   swal(
  //     "Cancelled",
  //     "Data Delete Cancelled",
  //     "error"
  //   );
  //   $('#delete-modal').modal('hide');
  // };

  // remarks();

  // $scope.add_remarks = function () {
  //   var promise = ClinicFactory.add_remarks($scope.remarks_form);

  //   promise.then( function (data) {
  //     swal(
  //       "Data Saved",
  //       "Successfully Stored",
  //       "success"
  //     );
  //     $('#remarks-modal').modal('hide');
  //   })
  //   .then(null, function () {  
  //     swal(
  //       "Failed to save",
  //       "Try Again",
  //       "error"        
  //     );
  //   });
  // };

  // $scope.data_remarks = function (key) {
  //   $scope.remarks_form = $scope.patients[key];
  //   console.log($scope.remarks_form);
  //   remarks();
  // };

  // function remarks() {
  //   var promise = ClinicFactory.fetch_remarks();

  //   promise.then( function (data) {
  //     $scope.remarks = data.data.result;
  //   })
  //   .then(null, function(data) {
      
  //   });
  // };

    // $scope.admin_form = [];
  // $scope.edit_admin = {};


  // $scope.filter = {};


  
  // $scope.remarks_form = {};
  // $scope.remarks = [];