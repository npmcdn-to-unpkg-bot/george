;(function() {

    angular
      .module('george')
      .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$http', '$location', '$stateParams', 'Media'];


    function HomeCtrl($scope, $http, $location, $stateParams, Media) {

      $scope.getMedia = Media.getMedia()
          .then(function(response) {
            console.log(response.data);
            $scope.bricks = response.data;
          })
          .catch(function(response) {
            toastr.error(response.data.message, response.status);
          });


      ////////////  function definitions


      /**
       * Load some data
       * @return {Object} Returned object
       */
      // QueryService.query('GET', 'posts', {}, {})
      //   .then(function(ovocie) {
      //     self.ovocie = ovocie.data;
      //   });
    }
  })();
