'use strict';

var uuid = '';

function signinCallback(authResult) {
	if (authResult['access_token']) {

        gapi.client.load('plus', 'v1', function() {
				var request = gapi.client.plus.people.get({
				'userId' : 'me'
			});
			request.execute(function(aInfo) {
                var scope = angular.element($("#main")).scope();
                scope.$apply(function(){
                    scope.gplus.uuid = aInfo.id;
                    scope.gplus.signed_in = true;
                })
                var new_scope = angular.element($("#new_event")).scope();
                new_scope.$apply(function() {
                    new_scope.data.event.user_foreign_id = aInfo.id;
                })
				uuid = aInfo.id;
			});
		 });
	} else if (authResult['error']) {
	// There was an error.
	// Possible error codes:
	//   "access_denied" - User denied access to your app
	//   "immediate_failed" - Could not automatically log in the user
	// console.log('There was an error: ' + authResult['error']);}

        if ( authResult['error'] == 'user_signed_out' ) {
            var scope = angular.element($("#main")).scope();
                scope.gplus.uuid = '';
                scope.gplus.signed_in = false;
            var new_scope = angular.element($("#new_event"));
            if ( typeof new_scope.data.event != 'undefined' ) {
                new_scope.data.event.user_foreign_id = '';
            }
        }
    }
}

function disconnect() {
  // Revoke the access token.
  $.ajax({
    type: 'GET',
    url: 'https://accounts.google.com/o/oauth2/revoke?token=' +
        gapi.auth.getToken().access_token,
    async: false,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(result) {
      console.log('revoke response: ' + result);
        document.getElementById('signinButton').setAttribute('style', 'display: inline-block');
        document.getElementById('neweventButton').setAttribute('style', 'display: none');
        document.getElementById('revokeButton').setAttribute('style', 'display: none');
    },
    error: function(e) {
      console.log(e);
    }
  });
}

// Declare app level module which depends on filters, and services
angular.module('regMonster', ['regMonster.filters', 'regMonster.services', 'regMonster.directives', 'regMonster.controllers'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'assets/templates/home.html', controller: 'HomeCtrl'});
        $routeProvider.when('/events', {templateUrl: 'assets/templates/events_list.html', controller: 'EventsCtrl'});
        $routeProvider.when('/schedule', {templateUrl: 'assets/templates/my_events.html', controller: 'MyEventsCtrl'});

        $routeProvider.otherwise({redirectTo: '/'});
  }]);
