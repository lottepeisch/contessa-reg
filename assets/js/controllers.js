'use strict';

/* Controllers */

// angular.module('BannerToolUI.controllers', [])
// 	.controller('AppCtrl', ['$scope', '$location', function($scope, $location) {	.factory('BannerService', function($resource, $q, $http, $filter){

angular.module('regMonster.controllers', [])
    .controller('MainCtrl', ['$scope','$timeout','GPlusServices', function($scope, $timeout, GPlusServices) {
        $scope.status = {};
        $scope.gplus = {};

        // Sets the status on the status zone with various options.
//        {
//            template: 'event_success', // Template Name
//            code: '500' // Status Code
//            message: "Error error error!", // Message to User
//            level: "danger", // Warning Level
//            sticky: true // Stick it or let it auto-close?
//        }

        $scope.revokeGPlus = function() {
            if ( typeof gapi != 'undefined' ) {
                gapi.auth.signOut();
            }
        }

        $scope.setStatus = function(config) {
            if ( config.template ) {
                // Custom status messages for completing various tasks.
                $scope.status.template = config.template;
            } else {
                $scope.status.template = 'generic';
                // Use a generic template if there isn't
                // a better, custom alternative.
                $scope.status.level = config.level;
                $scope.status.code = config.code;
                $scope.status.message = config.message;
            }

            if ( !config.sticky ) {
                var timeoutID = $timeout(function() {
                    $scope.status = {};
                }, 10000);
            }
        }

//        $scope.setStatus({
//           template: 'event_success',
//            code: 500,
//            message: "Error error error!",
//            level: "warning",
//            sticky: true
//        });

        $scope.localTimeDate = function(utc_time) {
            return moment(utc_time).format();
        }

        $scope.getDay = function(utc_time) {
            return moment(utc_time).format('dddd');
        }

        $scope.gplusSignInCheck = function() {
            if ( typeof gapi != 'undefined' || $scope.gplus.uuid ) {
                gapi.signin.go('#signinButtonSched');
            }
        }

        $scope.gplusSignInCheck();
    }])
	.controller('EventsCtrl', ['$scope', 'TKServices', function($scope, TKServices) {
        $scope.gplusSignInCheck();

        TKServices.getEvents()
            .then(function (response) {
                $scope.events = response.data;

                $scope.tkurl = "https://www.tavern-keeper.com";
            });

        $scope.getImage = function(item,num) {
            if ( item != null ) {
                return item;
            } else {
                return 'assets/images/placeholders/' + Math.floor(num / (Math.pow(10, 4)) % 10) + '.png';
            }
        }
	}])
    .controller('MyEventsCtrl', ['$scope', 'TKServices', '$timeout', function($scope, TKServices, $timeout) {
        $scope.schedule = {};
        $scope.user_foreign_id = '';

        $scope.gplusSignInCheck();

        $scope.getSchedule = function() {
            if ( $scope.$parent.gplus.uuid ) {
                TKServices.getSchedule($scope.$parent.gplus.uuid)
                    .then(function (response) {
                        $scope.schedule = response.data;
                    })
            } else {
                $timeout(function() {
                    $scope.getSchedule();
                }, 3000);
            }
        }

        $scope.getSchedule();

    }])
    .controller('HomeCtrl', ['$scope', function($scope) {
        $scope.gplusSignInCheck();
    }])
	.controller('NewEventsCtrl', ['$scope', 'TKServices', 'GPlusServices', '$rootScope', function($scope, TKServices, GPlusServices, $rootScope) {

        $scope.data = {};
        $scope.data.event = {};

        $scope.formatDate = function(day, time) {
            var day = moment(day + ' ' + time, "YYYY-MM-DD hh:ss");
            day = day.toISOString();
            $scope.data.event.start_at = day;
        }

        $scope.submitEvent = function(data) {
            $scope.formatDate($scope.data.event.day, $scope.data.event.hour);
            if ( $scope.data.event.event_type == 'Panel') {
                TKServices.sendNewPanel($scope.data)
                    .success(function(data, status) {
                        $scope.data = {};
                        $scope.data.event = {};
                        $scope.setStatus({
                            template: 'event_success',
                            sticky: true
                        });
                    })
                    .error(function(data, status) {
                        $scope.data = {};
                        $scope.data.event = {};
                        $scope.setStatus({
                            code: status,
                            message: data,
                            level: "danger",
                            sticky: false
                        });
                    });
            } else {
                TKServices.sendNewGame($scope.data)
                   .success(function(data, status) {
                        $scope.setStatus({
                            template: 'event_success',
                            sticky: true
                        });
                    })
                    .error(function(data, status) {
                        $scope.setStatus({
                            code: status,
                            message: data,
                            level: "danger",
                            sticky: false
                        });
                    });
            }
        }

	}])
    .controller('StatusZoneCtrl', ['$scope', function($scope) {

    }]);