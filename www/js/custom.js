$(document).ready(function() {
	$(function() {
	  $(document).on("touchmove", function(evt) { evt.preventDefault() });
	  $(document).on("touchmove", ".scrollable", function(evt) { evt.stopPropagation() });
	});
});