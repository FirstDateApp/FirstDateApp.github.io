angular.module('starter.services', ['ngResource'])

/**
 * A simple example service that returns some data.
 */
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

