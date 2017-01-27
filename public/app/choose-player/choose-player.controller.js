angular.module('deja.vu')
  .controller('choosePlayerController', choosePlayerController)

  function choosePlayerController($http)  {
    const vm = this;

    vm.$onInit = function()  {
      $http.get('/')
        .then((result)  =>  {
          vm.players = result
        })
        .catch((err)  =>  {
          console.log(err)
        })
    }
  }
