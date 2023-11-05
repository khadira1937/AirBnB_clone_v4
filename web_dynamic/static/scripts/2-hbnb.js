$( document ).ready(function() {
    let amenities = {};
    $('input[type="checkbox"]').change(function() {
        if (this.checked) {
	    amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete amenities[$(this).attr('data-id')];
        }
	console.log(amenities);
        if (Object.keys(amenities).length >= 0) {
            $("DIV.amenities H4").text(Object.values(amenities).join(', '));
        }
    });
    const link = "http://" + window.location.hostname;
  $(function () {
    const apiUrl = link + ":5001/api/v1/status/";
    $.get(apiUrl, function (data, status) {
      if (data.status === "OK" && status === "success") {
        $("#api_status").addClass("available");
      } else {
        $("#api_status").removeClass("available");
      }
    });
  });
});

