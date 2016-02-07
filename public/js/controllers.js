

var portfolioAppControllers = angular.module('portfolioAppControllers', []);

portfolioAppControllers.controller('portfolioAppCtrl', ['$scope', '$http' , function ($scope, $http) {


    $scope.highlight = function(event) {
        var id = event.target.id
        if (id == "stephanie-header") {
            $('.active-li').removeClass('active-li');
            $("#contact_link").addClass('active-li');
        }
        else {
            $('.active-li').removeClass('active-li');
            $("#"+id).addClass('active-li');
        }
    };

    // $scope.photos1 = ["Bravos2","Chirstopher","Dominique-Bertucci2", "Erik-at-H&M2"]
    $scope.photos1 = ["Melting-Away22","Metra-Halsted-Steps2",
                          "San-Procopio","Street-Artist"]
    $scope.photos2 = ["Two-chairs","Underneathe-the-Old-Tracks","vivienne", "Three's-a-Party2"]

}]);


$( document ).ready(function() {
  lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })
});
