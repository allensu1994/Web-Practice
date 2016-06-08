$(document).ready(function(){
	
	size = 10;
	for (i = 1; i < size; i++){	
		$('#grid').append('<tr>');
		for (j = 1; j < size; j++){
			$('#grid').append('<td class="box"/>');
		}
		$('#grid').append('</tr>');
	}
})