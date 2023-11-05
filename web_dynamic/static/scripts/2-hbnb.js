$( document ).ready(function() {
    let amenities = {};
    $('input[type="checkbox"]').change(function() {
        if (this.checked) {
	    amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete amenities[$(this).attr('data-id')];
        }
        if (Object.keys(amenities).length >= 0) {
            $("DIV.amenities H4").text(Object.values(amenities).join(', '));
        }
    });

$.get('http://0.0.0.0:5001/api/v1/status/', function(data)
{
    if (data.status == "OK"){
	$('#api_status').addClass('available');
    } else {
	$('#api_status').removeClass('available');
    }
});
