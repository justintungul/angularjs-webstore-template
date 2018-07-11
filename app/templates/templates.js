angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/templates', {
      templateUrl: 'templates/templates.html',
      controller: 'TemplatesCtrl'
    }).
    when('/templates/:templatesId', {
      templateUrl: 'templates/template-details.html',
      controller: 'TemplateDetailsCtrl'
    });
}])

.controller('TemplatesCtrl', ['$scope', '$http', function($scope, $http){
  $http.get('json/templates.json').success(function(data){
    console.log(data);
  });
}])

.controller('TemplateDetailsCtrl', ['$scope', function($scope){
  console.log('Deets');
}]);
