var local = $("#dropperText_Mast");

var city = local.val();

$("li.user-location:not(:contains('" + city + "'))").closest(".review").parent().remove();