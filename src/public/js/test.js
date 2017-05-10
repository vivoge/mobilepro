var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
         return function(){
             return this.name;
         };
    }
};
var a = object.getNameFunc();

  console.log(a());