angular
  .module('other')
  .component('other', {
    templateUrl: 'components/other/other.html',
    controller: ['$scope', '$http', function ($scope, $http) {
      $http
        .get('data/games.json')
        .then(function (response) {
          $scope.games = response.data;
        })
    }]
  });