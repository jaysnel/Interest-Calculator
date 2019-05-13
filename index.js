jQuery('input').on('keypress', function (event) {
    var regex = new RegExp("^[0-9.]+$"); //Regex for remove all characters that are not numbers or a period, including special characters/symbols
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
       event.preventDefault();
       return false;
    }
});

jQuery("#calculate_button").on("click", function() {
	//Setting values of input fields that will be used
    p = jQuery("#cost_amount").val();
    n = jQuery("#int_rate").val();
    r = jQuery("#non_of_years").val();
    
  	jQuery("#calc_result span").html("$" + (p*n*r/100).toFixed(2));
})

jQuery("#clear_button").on("click", function() {
    jQuery("input").val('');
    jQuery("#calc_result span").html('');
  
})