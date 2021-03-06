// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
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


  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }
    

$scope.editItem = function(item, uInput, priority){
    console.log("in edit");
    var index = $scope.todos.indexOf(item);
    if (uInput) {
      $scope.todos[index].name = uInput;
    }
    else{
      $scope.todos[index].name = $scope.todos[index].name;
    }
    $scope.uInput = "";
    
    $scope.todos[index].priority = priority;
    //if (1){
      //$scope.todos.splice(index, 1); 
      //$scope.todos.push({name:uInput, priority:priority});}
      $scope.todos.sort(function(a,b) {
        if(a.priority > b.priority) {return 1;}
        if(a.priority < b.priority) {return -1;}
        return 0;
      });

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
