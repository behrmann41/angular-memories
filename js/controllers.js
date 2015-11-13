app.controller('MemController', function ($scope, $http){
  $scope.title = "Angular Memories"
  $http.get('http://g12-ian-behrmann-memories.cfapps.io/api/v1/memories').then(function(response){
    console.log(response.data.data)
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
      console.log(response.data)
    }, function(){
        console.log('error');
    });
  $scope.old_days='';
  $scope.these_days='';
  $scope.year='';
  }
})
