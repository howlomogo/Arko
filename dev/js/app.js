angular.module('app', ['fullPage.js', 'ngAnimate'])

.controller('appcontroller', ['$scope', function($scope) {

	$scope.navigationOpen = false;
	var animations = 'fadeIn fadeInLeft fadeInUp lightSpeedIn fadeInRight fadeInDown zoomIn';


	$scope.toggleNavigation = function() {
		$scope.navigationOpen = !$scope.navigationOpen;
		if($scope.navigationOpen) {
			$('.hamburger').addClass('is-active');
			$('#navigation').addClass('is-active');
	    	$('.navigation-animation--1').animateCss('fadeInUp');
	    	$('.navigation-animation--2').animateCss('fadeInUp');
	    	$('.navigation-animation--3').animateCss('fadeInUp');
	    	$('.navigation-animation--4').animateCss('fadeInUp');
	    	$('.navigation-animation--5').animateCss('fadeInUp');
		}

		else {
			$('.navigation-animation').removeClass('animated ' + animations);
			$('.hamburger').removeClass('is-active');
			$('#navigation').removeClass('is-active');
		}
	};

	
    $scope.mainOptions = {
	    anchors: ['Herobanner', 'About', 'Projects', 'Rotterdam', 'Madrid', 'London', 'Sofia', 'Footer'],
	    navigation: false,
	    scrollingSpeed: 700,
	    verticalCentered: true,
	    fitToSectionDelay: 7000,
		onLeave: function(index, nextIndex){
			//- Remove any animation effects from the previous section, making them finish instantly
			//- incase the user wants to scroll the page faster.
			$('#section' + index + " .animated").removeClass("animated " + animations);
			animateSlide(index, nextIndex);
		},
		afterRender: function(){
			//- Animate Section once rendered
			animateSection1();
		}
    };

    //- Animations
    //- Extend jQuery
    $.fn.extend({
	    animateCss: function (animationName) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	        });
	    }
	});

    function animateSlide(index, nextIndex) {
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
		        break;
		    case 7:
		    	animateSection7();
		        break;
		}
    }


    function animateSection1() {
    	$('.section1-animation--1').animateCss('fadeIn');
    	$('.section1-animation--2').animateCss('fadeInLeft');
    	$('.section1-animation--3').animateCss('fadeInLeft');
    	$('.section1-animation--4').animateCss('fadeInLeft');
    	$('.section1-animation--5').animateCss('fadeInUp');
    	$('.section1-animation--6').animateCss('lightSpeedIn');
    	$('.section1-animation--7').animateCss('fadeInUp');
    }

    function animateSection2() {
    	$('.section2-animation--1').animateCss('fadeInUp');
    	$('.section2-animation--2').animateCss('fadeInLeft');
    	$('.section2-animation--3').animateCss('fadeInRight');
    }

    function animateSection3() {
    	$('.section3-animation--1').animateCss('fadeInDown');
    }

    function animateSection4() {
    	$('.section4-animation--1').animateCss('fadeIn');
    	$('.section4-animation--2').animateCss('fadeIn');
    	$('.section4-animation--3').animateCss('zoomIn');
    	$('.section4-animation--4').animateCss('fadeInUp');
    	$('.section4-animation--5').animateCss('fadeInUp');
    	$('.section4-animation--6').animateCss('fadeInUp');
    }

    function animateSection5() {
    	$('.section5-animation--1').animateCss('fadeIn');
    	$('.section5-animation--2').animateCss('fadeIn');
    	$('.section5-animation--3').animateCss('zoomIn');
    	$('.section5-animation--4').animateCss('fadeInUp');
    	$('.section5-animation--5').animateCss('fadeInUp');
    	$('.section5-animation--6').animateCss('fadeInUp');
    }

    function animateSection6() {
    	$('.section6-animation--1').animateCss('fadeIn');
    	$('.section6-animation--2').animateCss('fadeIn');
    	$('.section6-animation--3').animateCss('zoomIn');
    	$('.section6-animation--4').animateCss('fadeInUp');
    }

    function animateSection7() {
    	$('.section7-animation--1').animateCss('fadeIn');
    	$('.section7-animation--2').animateCss('fadeIn');
    	$('.section7-animation--3').animateCss('zoomIn');
    	$('.section7-animation--4').animateCss('fadeInUp');
    	$('.section7-animation--5').animateCss('fadeInUp');
    	$('.section7-animation--6').animateCss('fadeInUp');
    }
}]);