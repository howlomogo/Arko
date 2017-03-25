angular.module("app", ["fullPage.js"])

.controller("appcontroller", ["$scope", function($scope) {
	$scope.test = "This Works";

    $scope.mainOptions = {
	    // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
	    anchors: ['herobanner', 'about', 'projects', 'Rotterdam', 'Madrid', 'London', 'Sofia'],
	    navigation: true,
	    navigationPosition: 'right',
	    scrollingSpeed: 700,
	    verticalCentered: true




    };
}]);