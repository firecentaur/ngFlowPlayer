
/**
 * @ngdoc function
 * @name flowplayerdirectiveApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flowplayerdirectiveApp
 */
app.controller('MainCtrl', function ($scope,flowPlayerService) {
    flowPlayerService.construct('js/flowplayer/example/scooter.flv');
});
