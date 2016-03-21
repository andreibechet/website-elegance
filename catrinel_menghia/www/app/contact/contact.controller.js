/**
 * Contact controllers
 */
(function () {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('ContactCtrl', ContactCtrl);

    function ContactCtrl($scope, $http, growl) {
        $scope.user = {
            "nume" : "",
            "mail" : "",
            "subiect":"",
            "mesaj":""
        };

        $scope.url = 'mail.php';

        $scope.save = function() {

            //Post to mail.php with the values entered in the inputs
            $http.post($scope.url, {"name": $scope.user.nume, "subject": $scope.user.subiect, "email": $scope.user.mail, "message": $scope.user.mesaj}).success(function(data, status) {
                $scope.status = status;
                $scope.data = data;
            });

            //Display success message
            growl.success("Mesajul Dumneavoastra a fost trimis!");

            //Reset inputs fields
            $scope.user = {};

        }
    }

})();
