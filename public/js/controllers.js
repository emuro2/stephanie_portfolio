

var portfolioAppControllers = angular.module('portfolioAppControllers', []);

portfolioAppControllers.controller('portfolioAppCtrl', ['$scope', '$http' , function ($scope, $http) {


    $scope.highlight = function(event) {
        var id = event.target.id
        $('.active-li').removeClass('active-li');
        $("#"+id).addClass('active-li');
    };

}]);


$( document ).ready(function() {
  lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      })
});
