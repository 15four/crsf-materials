$(document).ready(function(){
	$('.material_category').click(function(){
		$(this).find('.material_category_list').toggleClass('material_category_list--show');
		$(this).find('.material_category_header_icon').toggleClass('close');
	}).find('.material_category_list').click(function(e) {
  	return false;
	});;
});