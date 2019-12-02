$.getJSON('data/pizza.json', function(data){
	let menu = data.menu;
	$.each(menu, function(i, data){
		$('#daftar-menu').append('')
	});
});