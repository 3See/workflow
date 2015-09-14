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
