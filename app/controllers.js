var app = angular.module('dailyDosage');

app.controller('searchCtrl', function($scope, youtubeService) {
    $scope.search = function() {
        youtubeService.search().then(function(res) {
            $scope.results = res;
        });
    };
});