angular.module('starter.controllers', [])



.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
 
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
  $scope.toggleRight = function() {
    $ionicSideMenuDelegate.toggleRight();
  };
  
})

.controller('SignInCtrl', function($rootScope,$scope, $state) {
	$rootScope.toggledrag = false; 
  $scope.signIn = function(user) {
  	console.log('Sign-In', user);
    $state.go('tab.messages');
  };
})

.controller('PlanCtrl', ['$scope', 'GoogleMapApi'.ns(), 'LocationsAPI', function($scope,GoogleMapApi, LocationsAPI ) {
	$scope.data = {};
	$scope.lat = "0";
	$scope.lng = "0";
	$scope.accuracy = "0";
	$scope.error = "";
	$scope.map = {
			center: {
				latitude: $scope.lat,
				longitude: $scope.lng
    		},
			zoom: 12};
	$scope.showPosition = function (position){
		$scope.lat = position.coords.latitude;
		$scope.lng = position.coords.longitude;
		$scope.accuracy = position.coords.accuracy;
				
		LocationsAPI.jsonp_query({type:'restaurant', radius:'25', publisher:'10000005199', lat:$scope.lat, lon:$scope.lng, format:'json', callback:'JSON_CALLBACK'}, function(data) {
			$scope.issues = data.results.locations;
			$scope.map ={
			center: {
				latitude: $scope.lat,
				longitude: $scope.lng
    		},
			zoom: 12,
			refresh: true};						
		});
		
		
	}
	
		
	$scope.showError = function(error) {
		
	}
	
	$scope.getLocation = function () {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition($scope.showPosition, $scope.showError);
			
		}
	}
	
	
	GoogleMapApi.then(function(maps) {
		$scope.getLocation();        
		
			});
	

				
	
}])



.controller('ActivitiesCtrl', function($scope, Activities) {
  $scope.activities = Activities.all();
})

.controller('ActivityDetailCtrl', function($scope, $stateParams, Activities) {
  $scope.activity = Activities.get($stateParams.activityId);
})



.controller('TriviasCtrl', function($scope, Trivias) {
  $scope.trivias = Trivias.all();
})

.controller('TriviaDetailCtrl', function($scope, $stateParams) {
  $scope.trivia = $stateParams.name;
  console.log($scope.trivia);
;})

.controller('FungamesCtrl', function($scope, Fungames) {
  $scope.fungames = Fungames.all();
})

.controller('FungameDetailCtrl', function($scope, $stateParams) {
  $scope.trivia = $stateParams.name;
  console.log($scope.trivia);
})

.controller('FungamesCtrl', function($scope, Fungames) {
  $scope.fungames = Fungames.all();
})

.controller('FungameDetailCtrl', function($scope, $stateParams) {
  $scope.fungame = $stateParams.name;
  console.log($scope.fungame);
})





.controller('AfterCtrl', function($scope) {
})

.controller('MessagesCtrl', function($scope, Messages) {
  $scope.messages = Messages.all();
})

.controller('MessageDetailCtrl', function($scope, $stateParams, Messages) {
  $scope.message = Messages.get($stateParams.messageId);
})