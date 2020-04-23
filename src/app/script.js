(function(){
    var app = angular.module('todo',[]);
    
    app.controller('TodoCtrl', ['$scope',function($scope){
        $scope.name = 'Chris' // $scope 은 컨트롤러와 HTML 파일을 연결하는 역할
    }]) 
})();