var  myAppModuleService = angular.module('myApp.service',[]);

myAppModuleService.factory('discussFactory',['$resource','$http','ENV','$rootScope','$q',function ($resource,$http,ENV,$rootScope,$q) {
         var ApiUrl = ENV.api;
         var content = ENV.content;
         var topics = {};
         var catid = 20;


          var resource = $resource(ApiUrl);



         return {
             getTopic:function (num) {
                 var defer = $q.defer();
                 resource.query({catid:num},function (data) {
                    defer.resolve(data);
                },function (data) {
                    defer.reject(data)
                });
                 return defer.promise
             },
             getImageUrl:function (img) {
                 var defer = $q.defer();
                 resource.query({car:img},function (data) {
                     defer.resolve(data);
                 },function (data) {
                     defer.reject(data)
                 });
                 return defer.promise
             }
         }



}]);