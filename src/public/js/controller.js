var myAppModuleController = angular.module("myApp.controller",[]);

//home tab
myAppModuleController.controller('homeControl',['$scope','discussFactory',function ($scope,discussFactory) {

    $scope.getImagesList = function () {
        var img = 'img';
        var imgurls = discussFactory.getImageUrl(img);
        imgurls.then(function (data) {
            $scope.imagesList = data;
        })
    }
}]);


//find tab
myAppModuleController.controller('findControl',['$scope','discussFactory','$http','ENV',function ($scope,discussFactory,$http,ENV) {

    $scope.getcontent = function (catid) {
        var redata = discussFactory.getTopic(catid);
        redata.then(function (data) {
            console.log(data)
        })
    };

    $scope.fileList = function () {
        var url = 'http://localhost:9090/?aid=1'
        $http.get(url).then(successData,errorData);
        function successData(data) {
            $scope.findlist = data.data;
        }
        function errorData(data) {
        }
        // var list = discussFactory.getTopic(1);
        // list.then(function (data) {
        //     console.log(data);
        //     $scope.findlist = data;
        //
        // })
    }

    $scope.doRefresh = function () {

        var list= discussFactory.getTopic(2);
        list.then(function (data) {
            console.log(data);
            $scope.findlist = data;
            $scope.$broadcast('scroll.refreshComplete');
        })

    };
    // $scope.loadMore = function () {
    //     $scope.$broadcast('scroll.infiniteScrollComplete');
    // };

}]);


myAppModuleController.controller('aroundControl',['$scope',function ($scope) {

}]);

myAppModuleController.controller('discussControl',['$scope','discussFactory',function ($scope,discussFactory) {

    $scope.info =discussFactory.getTopic();

}]);

myAppModuleController.controller('mineControl',['$scope',function ($scope) {

}]);
