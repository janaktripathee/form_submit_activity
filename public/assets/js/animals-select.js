function getAnimals(){
	$('div').empty();
	$.ajax({
		url: '/animals.json',
		method: 'GET'
	}).then(function(animals){
		for (var animalIndex in animals){
			var p = $('<p>');
				p.text(`id: ${animals[animalIndex].id}, animal name: ${animals[animalIndex].animal_name}`)

				var bt = $('<button>');
				bt.attr('class', 'delete');
				
				bt.text('delete');
				bt.attr('data-id', animals[animalIndex].id)

				p.append(bt);
			$('div').prepend(p);
		}
	})
}
