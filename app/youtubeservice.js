var app = angular.module('dailyDosage');
var apiToken = 'AIzaSyBhL09TDCJ9wlHDbrW3aLwUKuCsNCF8uU4';

app.service('youtubeService', function ($http) {
    this.search = function (query) {
        return $http({ method: 'GET', url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLVeugZzad9ptmBM0XNvYwrVJDrDzdcvNT&key=' + apiToken }).then(function (res) {
            console.log(res);

            var newArr = [];

            for(var i =0; i< res.data.items.length; i++){
            	newArr.push(res.data.items[i].snippet.resourceId.videoId);
            }

            console.log(newArr);

            return newArr;
        });
    };
});