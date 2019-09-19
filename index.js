$('.menu').on('click', function(){
    $(this).toggleClass('active');
    $('.overlay').toggleClass('menuOpen');
    $('.galleryMusic').toggleClass('layer');
    $('.firstRow').toggleClass('layer');
    $('.mediaBtn').toggleClass('layer');
    $('.musicBtn').toggleClass('layer');
    $('.galleryMedia').toggleClass('layer');
    $('.contactBtn').toggleClass('layer');
    $('.letterSection').toggleClass('layer');
    $('.upcomingEvents').toggleClass('layer');
    $('.musicProjects a').toggleClass('layer');
    $('.single').toggleClass('layer');
    $('.iFrameContainer').toggleClass('layer');
    $('.largeRow').toggleClass('layer');
    $('.socialBar').toggleClass('layer');
    $('.socialE').toggleClass('layer');
    $('.titles').toggleClass('layer');
    $('.galleryTitle').toggleClass('layer');
    $('footer').toggleClass('layer');
});



function openContact(){
	$('.conOverlay').css('height', '100%');
    $('.openContact').css('visibility', 'hidden')
}

function closeCon(){
	$('.conOverlay').css('height', '0');
	$('.openContact').css('visibility', 'visible')
}

function openMedia(){
    $('.galleryMedia').css('display', 'unset');
    $('.galleryMusic').toggleClass('fadedOut');
    $('.galleryMedia').toggleClass('fadedIn');
    $('.galleryMedia').removeClass('fadedOut');
    $('.galleryMusic').removeClass('fadedIn');
    $('.mediaBtn').css('visibility', 'hidden');
    $('.musicBtn').css('visibility', 'visible');
    $('.socialBar').addClass('gallySocial');
    $('header').addClass('gallyHead');
}

function closeMedia(){
    $('.galleryMedia').css('display', 'none');
    $('.galleryMedia').removeClass('fadedIn');
    $('.galleryMedia').toggleClass('fadedOut');
    $('.galleryMusic').removeClass('fadedOut');
    $('.galleryMusic').toggleClass('fadedIn');
    $('.musicBtn').css('visibility', 'hidden');
    $('.mediaBtn').css('visibility', 'visible');
    $('.socialBar').removeClass('gallySocial');
    $('header').removeClass('gallyHead');
}

function fade(){
    $('.galleryMusic').addClass('animated fadeIn')
}

function closeLetter(){
    $('.letterSection').addClass('fadingOut')
    $('.mobileDates').css('margin-bottom', '10rem')
}

// onscroll the images appear

$(window).scroll(function(event) {
  
    $(".music").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in");  
      }
    });
    
  });
  
  var win =$(window);
  var allImg =$('.music');
  
  // already visible videos
  
  allImg.each(function(i, el){
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
  });

  // onscroll the videos appear

$(window).scroll(function(event) {
  
    $(".iFrameContainer").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
             /* $('.videos h1').css('margin-left', '48%');*/
              
      } 
    });
    
  });
  
  var win =$(window);
  var allVids =$('.iFrameContainer');
  
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


  /* function to resize iframes for responsiveness*/

  function resizeIFrameToFitContent( iFrame ) {

    iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}

window.addEventListener('DOMContentLoaded', function(e) {

    var iframes = document.querySelectorAll("iframe");
    for( var i = 0; i < iframes.length; i++) {
        resizeIFrameToFitContent( iframes[i] );
    }
} );



/*$(function(){
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
		else if($(this).find('div').hasClass('slideOne')){
			$('.slideOne').addClass('animated fadeInLeft delay-0.3s');
			$('.slideOne').css('visibility', 'visible');
			$(this).find('div').removeClass('fadeOutRight');
		}
		else if($(this).find('div').hasClass('slideTwo')){
			$('.slideTwo').addClass('animated fadeInLeft delay-0.3s');
			$('.slideTwo').css('visibility', 'visible');
			$(this).find('div').removeClass('fadeOutRight');
		}
		else if($(this).find('div').hasClass('slideThree')){
			$('.slideThree').addClass('animated fadeInLeft delay-0.3s');
			$('.slideThree').css('visibility', 'visible');
			$(this).find('div').removeClass('fadeOutRight');
		}
		else if($(this).find('div').hasClass('slideFour')){
			$('.slideFour').addClass('animated fadeInLeft delay-0.3s');
			$('.slideFour').css('visibility', 'visible');
			$(this).find('div').removeClass('fadeOutRight');
		}
		else{
			console.log('theres an error with musis section');
		}

	}).mouseleave(function(e){
		$(this).find('div').removeClass('animated fadeInLeft delay-0.3s');
		$(this).find('div').addClass('animated fadeOutRight delay-0.3s');
	})
	
});*/