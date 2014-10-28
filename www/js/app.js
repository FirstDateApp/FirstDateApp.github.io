// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'google-maps'.ns()])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
	  //StatusBar.statusBarOverlaysWebView(false);
	  //]StatusBar.overlaysWebView(true);
      // org.apache.cordova.statusbar required
      //StatusBar.styleDefault();
      //StatusBar.backgroundColorByHexString('#51bf9a');
      //StatusBar.styleColor('black');
	  //Statusbar.styleHex('#000');
	  StatusBar.overlaysWebView(false);
	  StatusBar.styleLightContent();
	  StatusBar.backgroundColorByHexString("#51bf9a");
    }
  });
})

 	//'GoogleMapApiProvider'.ns() == 'uiGmapGoogleMapApiProvider'
    .config(['GoogleMapApiProvider'.ns(), function (GoogleMapApi) {
        GoogleMapApi.configure({
            key: 'AIzaSyAFHITrBxHjrsnpNDm3mSD_kgE_-VQrryw',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    }])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  	.state('signin', {
      url: '/sign-in',
      templateUrl: 'templates/sign-in.html',
      controller: 'SignInCtrl',
    })
    
    .state('forgotpassword', {
      url: '/forgot-password',
      templateUrl: 'templates/forgot-password.html'
    })
    
	.state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html'
    })
    
    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.plan', {
      url: '/plan',
      views: {
        'tab-plan': {
          templateUrl: 'templates/tab-plan.html',
          controller: 'PlanCtrl'
        }
      }
    })
    
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'templates/settings.html',
          //controller: 'PlanCtrl'
        }
      }
    })
    
    .state('tab.match', {
      url: '/match',
      views: {
        'tab-match': {
          templateUrl: 'templates/match.html',
          //controller: 'PlanCtrl'
        }
      }
    })
    
    

    .state('tab.activities', {
      url: '/activities',
      views: {
        'tab-activities': {
          templateUrl: 'templates/tab-activities.html',
          controller: 'ActivitiesCtrl'
        }
      }
    })
    
    
    
    // play area
    .state('tab.play-convos', {
      url: '/play0',
      views: {
        'tab-activities': {
          templateUrl: 'templates/play-convos.html',
          //controller: 'ActivityDetailCtrl'
        }
      }
    })
    
	    .state('tab.play-trivia', {
	      url: '/play1',
	      views: {
	        'tab-activities': {
	          templateUrl: 'templates/play-trivia.html',
	          controller: 'TriviasCtrl'
	        }
	      }
	    })
    
    .state('tab.play-trivia-question', {
      url: '/trivia/:id?name',
      views: {
        'tab-activities': {
          templateUrl: 'templates/play-trivia-question.html',
          controller: 'TriviaDetailCtrl'
        }
      }
    })
    
    .state('tab.play-fungames', {
      url: '/play2',
      views: {
        'tab-activities': {
          templateUrl: 'templates/play-fungames.html',
          controller: 'FungamesCtrl',
          //controller: 'PayFungamesCtrl'
        }
      }
    })
    
    .state('tab.play-fungames-fungame', {
      url: '/fungames/:id?name',
      views: {
        'tab-activities': {
          templateUrl: 'templates/play-fungames-fungame.html',
          controller: 'FungameDetailCtrl',
        }
      }
    })
    
    
    .state('tab.play-more', {
      url: '/play3',
      views: {
        'tab-activities': {
          templateUrl: 'templates/play-more.html',
          //controller: 'ActivityDetailCtrl'
        }
      }
    })
	//////////////////////////////////
	
	
	
    .state('tab.after', {
      url: '/after',
      views: {
        'tab-after': {
          templateUrl: 'templates/tab-after.html',
          controller: 'AfterCtrl'
        }
      }
    })
    
   
    
    .state('tab.messages', {
      url: '/messages',
      views: {
        'tab-messages': {
          templateUrl: 'templates/tab-messages.html',
          controller: 'MessagesCtrl'
        }
      }
    })
    
    .state('tab.message-detail', {
      url: '/message/:MessageId',
      views: {
        'tab-messages': {
          templateUrl: 'templates/message-detail.html',
          controller: 'MessageDetailCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/sign-in');

}).run(function($rootScope, $state) {
      $rootScope.$state = $state; })

