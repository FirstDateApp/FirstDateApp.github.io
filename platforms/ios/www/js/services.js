angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Activities', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var activities = [
    { id: 0, name: 'Icebreakers' },
    { id: 1, name: 'Compatability' },
    { id: 2, name: 'Trivia' },
    { id: 3, name: 'Games' }
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
  // Might use a resource here that returns a JSON array

  // Some fake testing data
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
