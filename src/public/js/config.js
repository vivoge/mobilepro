var  myAppModuleConfig = angular.module('myApp.config',[]);

myAppModuleConfig.constant('ENV',{
   api:'http://localhost:9090',
   content:'http://localhost:9090/content'
});
