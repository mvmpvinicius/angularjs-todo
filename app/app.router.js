var directTalk = angular.module('directTalk', ['ngRoute', 'ui.bootstrap']);
directTalk.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/inicio', {
            templateUrl: 'app/components/inicio/inicio.view.html',
            controller: 'inicioController',
            controllerAs: 'inicioCtrl'
        })
        .otherwise({
            redirectTo: '/inicio'
        });
}]);

directTalk.controller('appCtrl', function($scope, $rootScope) {

	// Função para gerar textos(id) aleatórios para o item na lista.
    $rootScope.generateId = function() {

        var texto = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < 10; i++)
            texto += chars.charAt(Math.floor(Math.random() * chars.length));

        return texto;

    };

});

// Diretiva criada para permitir ativar funções via "enter". Exemplo: Ao escrever um item para lista e inserir pressionando enter.
directTalk.directive('pressEnter', function() {
    return function(scope, element, attrs) {
        element.bind('keydown keypress', function(event) {
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.pressEnter);
                });

                event.preventDefault();
            }
        });
    };
});