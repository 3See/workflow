// Code goes here 
 
 
var myApp = angular.module('app', []); 
 
 
myApp.controller('MainCtrl', function ($scope){ 
  $scope.todos = [];
  $scope.newItem = "";
  //used to safeguard against undefined
  var un_defined;
    
  $scope.addItem = function(){ 
    console.log("add"); 
    if ($scope.newItem !== "" && $scope.priority !== un_defined){
      $scope.todos.push({name:$scope.newItem, priority:$scope.priority});}
      $scope.todos.sort(function(a,b) {
        if(a.priority > b.priority) {return 1;}
        if(a.priority < b.priority) {return -1;}
        return 0;
      });
      $scope.newItem = "";
  } 
 
  $scope.deleteItem = function(index){ 
    console.log("delete"); 
    $scope.todos.splice(index, 1); 
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
