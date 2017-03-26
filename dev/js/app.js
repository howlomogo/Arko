angular.module('app', ['fullPage.js', 'ngAnimate'])

.controller('appcontroller', ['$scope', function($scope) {

    $scope.mainOptions = {
	    // sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
	    anchors: ['Herobanner', 'About', 'Projects', 'Rotterdam', 'Madrid', 'London', 'Sofia'],
	    navigation: false,
	    scrollingSpeed: 700,
	    verticalCentered: true,
		onLeave: function(index, nextIndex){
			animateSlide(nextIndex);
			// console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " +  direction);
		},
		// onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
		// 	console.log("onSlideLeave--" + "anchorLink: " + anchorLink + " index: " + index + " slideIndex: " + slideIndex + " direction: " + direction);
		// },
		afterRender: function(){
			//- Animate Section once rendered
			animateSection1();
		}
		// afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
		// 	console.log("afterSlideLoad--" + "anchorLink: " + anchorLink + " index: " + index + " slideAnchor: " + slideAnchor + " slideIndex: " + slideIndex);
		// 	console.log("----------------");
		// },
		// afterLoad: function(anchorLink, index){
  //           console.log("after Load  " + index);
		// 	console.log('===============');
		// 	console.log("afterLoad--" + "anchorLink: " + anchorLink + " index: " + index );
		// }




    };

    // Extend jQuery
    $.fn.extend({
	    animateCss: function (animationName) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	        });
	    }
	});

    function animateSlide(nextIndex) {
		switch (nextIndex) {
		    case 1:
		        animateSection1();
		        break;
		    case 2:
		        animateSection2();
		        break;
		    case 3:
		        animateSection3();
		        break;
		    case 4:
		        animateSection4();
		        break;
		    case 5:
		        animateSection5();
		        break;
		    case 6:
		        animateSection6();
		}
    }


    //- ADD
    function animateSection1() {
    	$('.section1-animation--1').animateCss('fadeInUp');
    	$('.section1-animation--2').animateCss('fadeInUp');
    	$('.section1-animation--3').animateCss('fadeInUp');
    }

    function animateSection2() {
    	$('.section2-animation--1').animateCss('fadeInUp');
    	$('.section2-animation--2').animateCss('fadeInLeft');
    	$('.section2-animation--3').animateCss('fadeInRight');
    }

    function animateSection3() {
    	$('#section3 h2').addClass('animated shake').one('animationend', function() {
    		$(this).removeClass('animated shake');
    	});
    }

    function animateSection4() {
    	console.log("ADD 4");
    }

    function animateSection5() {
    	console.log("ADD 5");
    }
    function animateSection6() {
    	console.log("ADD 6");
    }
}]);