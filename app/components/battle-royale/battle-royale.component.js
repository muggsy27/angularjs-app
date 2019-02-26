angular
  .module('battleRoyale')
  .component('battleRoyale', {
    templateUrl: 'components/battle-royale/battle-royale.html',
    controller: ['$scope', '$http', function ($scope, $http) {
      $http
        .get('data/games.json')
        .then(function (response) {
          $scope.games = response.data;
        })
    }]
  });