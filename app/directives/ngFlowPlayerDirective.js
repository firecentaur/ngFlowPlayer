'use strict';

/**
 * @ngdoc overview
 * @name flowplayerdirectiveApp
 * @description
 * # flowplayerdirectiveApp
 *
 * Main module of the application.
 */
var app = angular.module('flowplayerdirectiveApp', []);

app.directive('flowPlayer', function ($compile) {
    var playerTemplate = '<a class="myplayer" style="display: block;width: 450px;height: 350px;margin: 25px 0;text-align: center;background-color: #000;"/></a>';
    return {
        restrict: 'E',
        template: playerTemplate,
        replace: true,
        scope: {

            player: '='
        },
        link: function (scope, element, attrs) {
        }
    }
});
app.service('flowPlayerService', [function () {
    return {
        player: null,
        construct: function (vidname, onReady) {

            console.log('constructing player %o', vidname);
            $f("a.myplayer", "js/flowplayer/flowplayer-3.2.18.swf", {
                // Configure Flowplayer to use the RTMP plugin for streaming.
                clip: {
                    url: vidname,
                    //  provider: 'swf'

                },
                //  engine:'html5',
                // Specify the location of the RTMP plugin.
                plugins: {
                    //rtmp: {
                    //    url:'js/flowplayer/flowplayer.rtmp-3.2.13.swf',
                    //    netConnectionUrl:'rtmp://yourcloudfront.cloudfront.net/cfx/st'
                    //}
                }
            });
            this.player = flowplayer();
        }
    }
}]);

