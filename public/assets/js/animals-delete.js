$(document).on('click', '.delete', function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.
    
	$.ajax({
		url: '/animals-delete?_method=DELETE',
		method: 'POST',
		data: {animal_id : $(this).attr('data-id')}
	}).then(function(message){
		getAnimals();
	});

});