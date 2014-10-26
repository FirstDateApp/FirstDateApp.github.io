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
    { id: 3, name: 'FILM AND TV' },
    { id: 4, name: 'TRAVEL' },
    { id: 5, name: 'TECH' },
    { id: 6, name: 'MUSIC' },
    { id: 7, name: 'SEX' },
    { id: 8, name: 'CELEBRITIES' },
    { id: 9, name: 'ANIMALS' }
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
    { id: 0, name: 'LIGHTNING ROUND' },
    { id: 1, name: 'HAVE YOU EVER' },
    { id: 2, name: '2 TRUTHS 1 LIE' },
    { id: 3, name: 'PAPER AIRPLANE' },
    { id: 4, name: 'STARING CONTEST' },
    { id: 5, name: 'NAME THAT TUNE' },
    { id: 6, name: 'CHECKERS' },
    { id: 7, name: 'M.A.S.H' },
    { id: 8, name: 'CHARADES' }
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

.factory('Payfungames', function() {

  var payfungames = [
    { id: 0, name: 'LIGHTNING ROUND' },
    { id: 1, name: 'HAVE YOU EVER' },
    { id: 2, name: '2 TRUTHS 1 LIE' }  
  ];

  return {
    all: function() {
      return payfungames;
    },
    get: function(payfungameId) {
      // Simple index lookup
      return payfungames[payfungameId];
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


