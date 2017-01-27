(function() {
    'use strict';

    angular
        .module('deja.vu')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state({
            name: 'landing',
            url: '/',
            component: 'landing'
        });
        $stateProvider.state({
            name: 'one',
            url: '/option-one',
            component: 'one'
        });
        $stateProvider.state({
            name: 'wrong',
            url: '/wrong-option',
            component: 'wrong'
        });
        $stateProvider.state({
            name: 'choose',
            url: '/choose',
            component: 'choosePlayer'
        })



        $urlRouterProvider.otherwise('/');
    }

})();
