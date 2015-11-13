app.controller('MemController', function ($scope, $http){
  $scope.title = "Angular Memories"
  $http.get('http://g12-ian-behrmann-memories.cfapps.io/api/v1/memories').then(function(response){
    console.log(response.data.data)
    $scope.memories = response.data.data;
  })
})
