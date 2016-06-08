$(document).ready(function(){
	
	var screenWidth = $(window).width() * .45

	size = 20;
		$('#grid').append('<tr></tr>');
		for (j = 0; j < size; j++){
			$('tr').append('<td class="box"/>');
		}

	for (i = 1; i < size; i++){	
		$('tr:last').clone().appendTo('#grid');
	}

	boxSizes = ((screenWidth - (3 * 4) * size) / size);

	$('td.box').css({
		"width": boxSizes,
		"height": boxSizes
	})
	$('td.box').mouseover(function(){
		$(this).css('background-color','blue');
	});
});

