<<<<<<< HEAD
// Code goes here 
 
 
var myApp = angular.module('app', []); 
 
 
myApp.controller('MainCtrl', function ($scope){ 
  $scope.high = []; 
  $scope.medium = []; 
  $scope.low = []; 
  $scope.newItem = ""; 
    
  $scope.addItem = function(){ 
    console.log("add"); 
    if ($scope.newItem !== ""){
      if ($scope.priority == "high") {$scope.high.push($scope.newItem);}
      if ($scope.priority == "med") {$scope.medium.push($scope.newItem);}
      if ($scope.priority == "low") {$scope.low.push($scope.newItem);}
      $scope.newItem = ""; 
    } 
  } 
 
 
  $scope.highcheckItem = function(item){ 
    console.log("high check"); 
    var index = $scope.high.indexOf(item); 
    //need implementation 
  } 
 
 
  $scope.highdeleteItem = function(item){ 
    console.log("high delete"); 
    var index = $scope.high.indexOf(item); 
    $scope.high.splice(index, 1); 
  } 
 
 
  $scope.medcheckItem = function(item){ 
    console.log("medium check"); 
    var index = $scope.medium.indexOf(item); 
    //need implementation 
  } 
 
 
  $scope.meddeleteItem = function(item){ 
    console.log("med delete"); 
    var index = $scope.medium.indexOf(item); 
    $scope.medium.splice(index, 1); 
  } 
 
 
  $scope.highcheckItem = function(item){ 
    console.log("low check"); 
    var index = $scope.low.indexOf(item); 
    //Need implementation 
  } 
 
 
  $scope.lowdeleteItem = function(item){ 
    console.log("low delete"); 
    var index = $scope.low.indexOf(item); 
    $scope.low.splice(index, 1); 
  } 
 
 
}); 
 
 
 /************************* 
  * Homework (not rly): 
  * - "enter" button functionality instead of clicking button 
  * - edit button functionality 
  * - button to mark item as "complete" 
  * - have a total number of items at the top 
  * - make it prettier 
  * - add a due date 
  * - add reminder (setInterval) 
  *  
  * *********************/ 
=======
// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = [{name: "Learn Angular", done:false}, {name: "Learn node", done:false}];
  $scope.newItem = "";
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      var addItem = {name:$scope.newItem, done:false};
      $scope.todos.push(addItem);
      $scope.newItem = "";

    }
  }
    
  $scope.deleteItem = function(index){
    console.log("in delete");
    $scope.todos.splice(index, 1);
  }

  $scope.completeItem = function(index){
    console.log("completed item");
    $scope.todos[index].done = true;
  }

  $scope.uncompleteItem = function(index) {
    console.log("uncompleted item");
    $scope.todos[index].done = false;
  }
    
  
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/
>>>>>>> 7fc5c28ad48f11fd5d8dac53c6310f44586b5fba
