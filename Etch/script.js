var size = 20;
var screenWidth = $(window).width() * .5;
	
function gridGenerate(){
	$('.grid').remove();
	$('#wrapper').append('<div class="grid"></div>');

	$('.grid').append('<tr></tr>');
	for (j = 0; j < size; j++){
		$('tr').append('<td class="box"/>');
	}

	for (i = 1; i < size; i++){	
		$('tr:last').clone().appendTo('.grid');
	}

	boxSizes = ((screenWidth - ((3 * 4) * size)) / size);

	$('td.box').css({
		"width": boxSizes,
		"height": boxSizes
	})
	$('td.box').mouseover(function(){
		$(this).css('background-color','#34495e');
	});
}

function newGrid(){
	size = prompt('How large do you want your square?');
	gridGenerate();
}

$(document).ready(function(){
	gridGenerate();
});

