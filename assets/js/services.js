'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('regMonster.services', ['ngResource'])
    .factory('TKServices', function($resource, $http) {
        //Set up TK URLs here
        // Also setup config here

        var //apikey = '?api_key=3af71acd-a728-416a-86f7-73562e4af72d',
            apikey = '?api_key=6d993c42-df0a-4be2-a0af-b67ea6931ef4',
            //tkurl = 'https://alpha.tavern-keeper.com/api/v1',
            tkurl = 'https://www.tavern-keeper.com/api/v1',
            new_game = '/events/1/games',
            new_panel = '/events/1/panels',
            schedule = '/events/1/users/',
            list_events = '/events/1/schedule';

        return {
            getEvents: function () {
                return $http.get(tkurl + list_events + apikey);
            },
            getSchedule: function (foreign_id) {
                return $http.get(tkurl + schedule + foreign_id + '/schedule' + apikey);
            },
            sendNewGame: function(data) {
                return $http.post(tkurl + new_game + apikey, data);
            },
            sendNewPanel: function(data) {
                return $http.post(tkurl + new_panel + apikey, data);
            }
        }
    })
    .factory('GPlusServices', function($resource, $http) {
        return {
            revokeGPlus: function() {
                var url = 'https://accounts.google.com/o/oauth2/revoke?token=' +
                gapi.auth.getToken().access_token + '&callback=JSON_CALLBACK';

                return $http.jsonp(url, config);
            }
        }
    })
