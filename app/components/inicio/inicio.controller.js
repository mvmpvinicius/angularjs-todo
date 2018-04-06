var directTalk = angular.module('directTalk');
directTalk.controller('inicioController', function($scope, $rootScope) {

    var $inicio = this;

    $scope.item = '';
    $scope.show_info = false;
    $scope.show_success = false;

    $scope.item_compra = null;
    $scope.lista_compra = [];

    // Função para sumir os alerts.
    $scope.closeAlert = function(index) {

        $scope.show_info = false;
        $scope.show_success = false;

    };

    // Botão concluir item individualmente
    $scope.concluir = function(index) {

        $scope.item = $scope.lista_compra[index].item;
        $scope.show_info = true;

        $scope.lista_compra[index].concluido = true;

    };

    // Inserir item na lista do supermercado.
    $scope.inserir = function() {

        var id = $rootScope.generateId();

        $scope.lista_compra.push({
            id: id,
            'concluido': false,
            'item': $scope.item_compra
        });

        $scope.item = $scope.item_compra;
        $scope.show_success = true;

        $scope.item_compra = null;

    };

    // Função para limpar os itens da lista já concluidos.
    $scope.limparConcluidos = function() {

        var old_lista_compra = $scope.lista_compra;
        $scope.lista_compra = [];

        old_lista_compra.forEach(function(element, index) {

            if (!element.concluido) {

                $scope.lista_compra.push(element);

            }

        });

    };

});