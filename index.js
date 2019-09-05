 // menu to hide and come back
  function openNav(){
		if(screen.width <='375'){
			document.getElementById("navSidePanel").style.height = '15%';
			document.getElementById("menuBtn").style.height = '0';
			document.getElementById("menuBtn").style.padding = '0 0';
			document.getElementById("menuOffSet").style.display = 'none';
			console.log(screen.width);
			document.getElementById("social-bar").style.top = '21.9%';
		}
		else{
			console.log(screen.width);
		document.getElementById("navSidePanel").style.width = '13%';
		document.getElementById("menuBtn").style.width = '0';
		document.getElementById("menuBtn").style.padding = '0 0';
		document.getElementById("menuOffSet").style.display = 'none';
		
		}
}

	function closeNav(){
		if(screen.width <= '375'){
			document.getElementById("menuBtn").style.height = '8.2%';
			document.getElementById("menuOffSet").style.display = 'unset';
			document.getElementById("navSidePanel").style.height ='0';
			document.getElementById("social-bar").style.top = '12.3%';
		}
		else{
			document.getElementById("menuBtn").style.width = '2.7%';
			document.getElementById("menuBtn").style.padding = '10px 0px';
			document.getElementById("menuOffSet").style.display = 'unset';
			document.getElementById("navSidePanel").style.width ='0';
		}
}

  function conOpenNav(){
		document.getElementById("conNavSidePanel").style.width = '25%';
		document.getElementById("conMenuBtn").style.width = '0';
		document.getElementById("conMenuBtn").style.padding = '0 0';
		document.getElementById("conMenuOffSet").style.display = 'none';
}

	function conCloseNav(){
		document.getElementById("conMenuBtn").style.width = '3.2%';
		document.getElementById("conMenuBtn").style.padding = '1.15% 0px';
		document.getElementById("conMenuOffSet").style.display = 'unset';
		document.getElementById("conNavSidePanel").style.width ='0';
}


  function mobileOpenNav(){
		
		
}

	function conCloseNav(){
		if($('.'))
		document.getElementById("conMenuBtn").style.width = '3.2%';
		document.getElementById("conMenuBtn").style.padding = '1.15% 0px';
		document.getElementById("conMenuOffSet").style.display = 'unset';
		document.getElementById("conNavSidePanel").style.width ='0';
}

// nav bar hide on scroll down and appear on scroll up

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menuBtn").classList.remove('animated', 'zoomOutUp' ,'delay-0.3s');
    document.getElementById("social-bar").classList.remove('animated', 'zoomOutRight' ,'delay-0.5s');
    document.getElementById("social-bar").classList.add('animated', 'zoomIn' ,'delay-0.3s');
    document.getElementById("menuBtn").classList.add('animated', 'zoomIn' ,'delay-0.3s');
  } else {
    document.getElementById("menuBtn").classList.add('animated', 'zoomOutUp' ,'delay-0.3s');
    document.getElementById("social-bar").classList.add('animated', 'zoomOutRight' ,'delay-0.5s');
  }
  prevScrollpos = currentScrollPos;
}


/*var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("conMenuBtn").classList.remove('animated', 'zoomOutUp' ,'delay-0.3s');
    document.getElementById("social-bar").classList.remove('animated', 'zoomOutRight' ,'delay-0.5s');
    document.getElementById("social-bar").classList.add('animated', 'zoomIn' ,'delay-0.3s');
    document.getElementById("conMenuBtn").classList.add('animated', 'zoomIn' ,'delay-0.3s');
  } else {
    document.getElementById("conMenuBtn").classList.add('animated', 'zoomOutUp' ,'delay-0.3s');
    document.getElementById("social-bar").classList.add('animated', 'zoomOutRight' ,'delay-0.5s');
  }
  prevScrollpos = currentScrollPos;
}*/

// onscroll the videos appear

$(window).scroll(function(event) {
  
  $(".iFrame").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
			$('.videos h1').css('margin-left', '48%');
			
    } 
  });
  
});

var win =$(window);
var allVids =$('.iFrame');

// already visible videos

allVids.each(function(i, el){
	var el = $(el);
	if(el.visible(true)){
		el.addClass('already-visible');
	}
});

win.scroll(function(event){

	allVids.each(function(i, el){
		var el =$(el);
		if(el.visible(true)) {
			el.addClass('come-in');
		}
	})
})

$(function(){
	$('.music').on('mouseenter', function(e){
		if($(this).find('div').hasClass('significant')){
			$('.significant').addClass('animated fadeInLeft delay-0.3s');
			$('.significant').css('visibility', 'visible');
			$('.significant').removeClass('fadeOutRight');
		}
		else if($(this).find('div').hasClass('jaw')){
			$('.jaw').addClass('animated fadeInLeft delay-0.3s');
			$('.jaw').css('visibility', 'visible');
			$(this).find('div').removeClass('fadeOutRight');
			
		}
		else if($(this).find('div').hasClass('one')){
			$('.one').addClass('animated fadeInLeft delay-0.3s');
			$('.one').css('visibility', 'visible');
			$(this).find('div').removeClass('fadeOutRight');
		}
		else if($(this).find('div').hasClass('two')){
			$('.two').addClass('animated fadeInLeft delay-0.3s');
			$('.two').css('visibility', 'visible');
			$(this).find('div').removeClass('fadeOutRight');
		}
		else if($(this).find('div').hasClass('three')){
			$('.three').addClass('animated fadeInLeft delay-0.3s');
			$('.three').css('visibility', 'visible');
			$(this).find('div').removeClass('fadeOutRight');
		}
		else if($(this).find('div').hasClass('four')){
			$('.four').addClass('animated fadeInLeft delay-0.3s');
			$('.four').css('visibility', 'visible');
			$(this).find('div').removeClass('fadeOutRight');
		}
		else{
			console.log('theres an error with musis section');
		}

	}).mouseleave(function(e){
		$(this).find('div').removeClass('animated fadeInLeft delay-0.3s');
		$(this).find('div').addClass('animated fadeOutRight delay-0.3s');
	})
	
});

// js for the contact overlay

function openContact(){
	$('.conOverlay').css('height', '100%');
	$('.openContact').css('visibility', 'hidden')
}

function closeCon(){
	$('.conOverlay').css('height', '0');
	$('.openContact').css('visibility', 'visible')
}

