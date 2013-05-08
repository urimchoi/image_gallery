// Change the size of the thumbnails from Small, Medium, and Large 

$(document).ready(function() {
	
	var i = 1;

	// When #smaller button is pressed, the image size decreases one level and changes the text to the respective size name
	$('#smaller').click(function() {
		$('section div.image').hide();
		if (i === 1)
		{
			$('section div.image').removeClass('image_medium image_large').addClass('image_small').fadeIn(1000);
			i--;
			$('nav div').text('Small');
		}
		else if (i === 2)
		{
			$('section div.image').removeClass('image_large image_small').addClass('image_medium').fadeIn(1000);
			i--;
			$('nav div').text('Medium');
		}
			
	});

	// When #larger button is pressed, the image size increases one level and changes the text to the respective size name
	$('#larger').click(function() {
		$('section div.image').hide();
		if (i === 0)
		{
			$('section div.image').removeClass('image_large image_small').addClass('image_medium').fadeIn(1000);
			i++;
			$('nav div').text('Medium');
		}
		else if (i === 1)
		{
			$('section div.image').removeClass('image_medium image_small').addClass('image_large').fadeIn(1000);
			i++;
			$('nav div').text('Large');
		}
			
	});


	// enables overlay when mouse is over an image
	$('div.image').mouseenter(function() {
		$(this).children('.info').fadeIn(200);
	});

	// hides the overlay when mouse no longer is over an image
	$('div.image').mouseleave(function() {
		$(this).children('.info').hide();
	});

	$('.info div').click(function() {

		// when in the large image view, clicking on the div fades away the image and returns back to the gallery view
		if ($(this).parent().parent().is('.image_xlarge'))
		{	
			$(this).viewLargeImage();
		}

		// when in the gallery view, hides all other pictures and shows the selected image in a large size
		else
		{
			$(this).closeLargeImage();
		}
	})

	jQuery.fn.viewLargeImage = function() {
		$(this).parent().parent().hide().removeClass('image_xlarge');
		$('.image').fadeIn(1000);
		$(this).text('expand').css({top:'50%',left:'50%', width:'100px', 'border-radius':'0px'});
		$(this).parent().css({background:'#000'});
	}

	jQuery.fn.closeLargeImage = function() {
		$('.image').hide();
		$(this).parent().parent().addClass('image_xlarge').fadeIn(1000);
		$(this).text('X').css({top:'50px', left:'75px', width:'38px', 'border-radius':'25px'});
		$(this).parent().css({background:'transparent'});
	}

});