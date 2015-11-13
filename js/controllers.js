app.controller('MemController', function ($scope, $http, $routeParams){
  $scope.title = "Angular Memories"
  $http.get('http://g12-ian-behrmann-memories.cfapps.io/api/v1/memories').then(function(response){
    $scope.memories = response.data.data;
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
    $http.post('http://g12-ian-behrmann-memories.cfapps.io/api/v1/memories', {data: res}).then(function(response){
    }, function(){
        console.log('error');
    });
  $scope.old_days='';
  $scope.these_days='';
  $scope.year='';
  }
  $http.get('http://g12-ian-behrmann-memories.cfapps.io/api/v1/memories/years').then(function(response){
    $scope.memoryYears = response.data.data
  })
  $http.get('http://g12-ian-behrmann-memories.cfapps.io/api/v1/memories/' + $routeParams.year).then(function(response){
    console.log(response.data.data)
    $scope.yearData = response.data.data
    $scope.year = $routeParams.year;
  })
})
