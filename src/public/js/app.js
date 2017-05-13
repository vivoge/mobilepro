var app = angular.module('myApp',['ionic','myApp.controller','myApp.config','myApp.service','ngResource']);

app.config(['$ionicConfigProvider','$stateProvider','$urlRouterProvider',function ($ionicConfigProvider,$stateProvider,$urlRouterProvider) {

    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.tabs.style('sttandard');

    $stateProvider
        .state('tabs',{
            url:'/tabs',
            abstract:true,
            templateUrl:'../templates/tabs.html'
        })
        .state('tabs.home',{
            url:'/home',
            views:{
                'home':{
                    templateUrl:'../templates/home.html',
                    controller:'homeControl'
                }
            }
        })
        .state('tabs.find',{
            url:'/find',
            views:{
                'find':{
                    templateUrl:'../templates/find.html',
                    controller:'findControl'
                }
            }
        })
        .state('tabs.around',{
            url:'/around',
            views:{
                'around':{
                    templateUrl:'../templates/around.html',
                    controller:'aroundControl'
                }
            }
        })
        .state('tabs.discuss',{
            url:'/discuss',
            views:{
                'discuss':{
                    templateUrl:'../templates/discuss.html',
                    controller:'discussControl'
                }
            }
        })
        .state('tabs.mine',{
            url:'/mine',
            views:{
                'mine':{
                    templateUrl:'../templates/mine.html',
                    controller:'mineControl'
                }
            }
        })
        .state('content',{
            url:'/content/:aid',
            templateUrl:'../../templates/news-content.html',
            controller:'newsContent'
        })
    ;

    $urlRouterProvider.otherwise('/tabs/home');

}]);

