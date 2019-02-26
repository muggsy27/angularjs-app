angular
  .module('home')
  .component('home', {
    templateUrl: 'components/home/home.html',
    controller: ['$scope', '$http', function ($scope, $http) {
      $http
        .get('data/games.json')
        .then(function (response) {
          $scope.games = response.data;
        })
    }]
  });