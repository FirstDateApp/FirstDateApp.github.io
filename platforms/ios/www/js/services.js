angular.module('starter.services', ['ngResource'])

// play (activities)
.factory('Activities', function() {

  var activities = [
    { id: 0, name: 'CONVO STARTERS' },
    { id: 1, name: 'TRIVIA' },
    { id: 2, name: 'FUN + GAMES' },
    { id: 3, name: 'MORE' }
  ];

  return {
    all: function() {
      return activities;
    },
    get: function(activityId) {
      // Simple index lookup
      return activities[activityId];
    }
  }
})

// trivia 
.factory('Trivias', function() {

  var trivias = [
    { id: 0, name: 'SPORTS' },
    { id: 1, name: 'CATS' },
    { id: 2, name: 'FILM AND TV' },
    { id: 3, name: 'TRAVEL' },
    { id: 4, name: 'TECH' },
    { id: 5, name: 'MUSIC' },
    { id: 6, name: 'SEX' },
    { id: 7, name: 'CELEBRITIES' },
    { id: 8, name: 'ANIMALS' }
  ];

  return {
    all: function() {
      return trivias;
    },
    get: function(triviaId) {
      // Simple index lookup
      return trivias[triviaId];
    }
  }
})

// fun and games
.factory('Fungames', function() {

  var fungames = [
    { id: 0, name: 'FAST GUESS' },
    { id: 1, name: 'DARE ME' },
    { id: 2, name: 'TUNE QUIZ' },
    { id: 3, name: 'TRUE LIES' },
    { id: 4, name: 'M.A.S.H' },
    { id: 5, name: 'CHARADES' },
    { id: 6, name: 'CHECKERS' },
    { id: 7, name: 'STARE OFF' },
    { id: 8, name: 'AIRPLANE' }
  ];

  return {
    all: function() {
      return fungames;
    },
    get: function(fungameId) {
      // Simple index lookup
      return fungames[fungameId];
    }
  }
})

.factory('Messages', function() {

  var messages = [
    { id: 0, name: 'message1' },
    { id: 1, name: 'message2' },
    { id: 2, name: 'message3' },
    { id: 3, name: 'message4' }
  ];

  return {
    all: function() {
      return messages;
    },
    get: function(messageId) {
      // Simple index lookup
      return messages[messageId];
    }
  }
})


.factory('LocationsAPI', function($resource){
	return $resource('https://api.citygridmedia.com/content/places/v2/search/latlon', {}, {
		jsonp_query: {
			method: 'JSONP'
			}
	});		
})


