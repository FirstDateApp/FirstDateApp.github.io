angular.module('starter.controllers', [])



.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
 
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
})

.controller('SignInCtrl', function($scope, $state) {
  $scope.signIn = function(user) {
  	console.log('Sign-In', user);
    $state.go('tab.plan');
  };
})

.controller('PlanCtrl', function($scope, LocationsAPI) {
	$scope.data = {};
	LocationsAPI.query(function(response){
		$scope.data.issues = response;
	});
	console.log('PlanCtrl');
})

.controller('ActivitiesCtrl', function($scope, Activities) {
  $scope.activities = Activities.all();
})

.controller('ActivityDetailCtrl', function($scope, $stateParams, Activities) {
  $scope.activity = Activities.get($stateParams.activityId);
})

.controller('AfterCtrl', function($scope) {
})

.controller('MessagesCtrl', function($scope, Messages) {
  $scope.messages = Messages.all();
})

.controller('MessageDetailCtrl', function($scope, $stateParams, Messages) {
  $scope.message = Messages.get($stateParams.messageId);
})