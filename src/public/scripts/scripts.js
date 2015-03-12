$(document).ready(function(){
	$('.material_category').click(function(){
		$(this).toggleClass('material_category--show');
	}).find('.material_category_list').click(function(e) {
  	return false;
	});;
});