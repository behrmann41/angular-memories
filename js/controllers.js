app.controller('MemController',['$scope', '$http', '$location', '$rootScope','$routeParams', function ($scope, $http, $location, $rootScope,$routeParams){
  $scope.title = "Angular Memories"
  $http.get('http://galvanize-service-registry.cfapps.io/api/v1/cohorts/g12/kids-these-days?guarantee=http://g12-ian-behrmann-memories.cfapps.io').then(function(response){
    $rootScope.url = response.data.data[0].attributes.url
    $http.get($rootScope.url + '/api/v1/memories').then(function(response){
      $scope.memories = response.data.data;
    })
    $http.get($rootScope.url + '/api/v1/memories/years').then(function(response){
      $scope.memoryYears = response.data.data
    })
    $scope.submit = function (){
      var res = {
          "type": "memory",
          "attributes": {
            "old_days": $scope.old_days,
            "these_days": $scope.these_days,
            "year": $scope.year
          }
      }
      $http.post($rootScope.url + '/api/v1/memories', {data: res}).then(function(response){
        $scope.old_days='';
        $scope.these_days='';
        $scope.year='';
        $scope.memories.push(res)
      }, function(){
          console.log('error');
      });
    }
  })
}])

app.controller('yearController', ['$scope', '$http', '$rootScope', '$routeParams', function($scope,$http,$rootScope, $routeParams){
  $rootScope.$watch('url', function (){
    $http.get($rootScope.url + '/api/v1/memories/' + $routeParams.year).then(function(response){
      $scope.yearData = response.data.data
      $scope.year = $routeParams.year;
    })
  })
}])
