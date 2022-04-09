$(document).ready(function() {
        
  $(function() {
    $('#success').hide();
    $('#errors').hide();
                
    $('#contact').submit(function() {       
      var name = $('#contact_name').val(),
          email = $('#contact_email').val(),
          movie = $('#contact_movie').val(),
          message = $('#contact textarea').val();

      $('#success').hide();
      $('#errors').hide();
      $('#error_name').hide();
      $('#error_email').hide();
      $('#error_movie').hide();
      $('#error_message').hide();
      $('#error_sending').hide();
          
      $.ajax({
				type: 'POST',
				url: 'php/contact.php',
				dataType: 'json',
				data: {
					name: name,
					email: email,
					movie: movie,
					message: message
				},
				success: function(data) {
					if (data.success) {
						$('#success').show();
            $('#contact_name').val(''),
            $('#contact_email').val(''),
            $('#contact_movie').val(''),
            $('#contact textarea').val('');
					}
          else {
            jQuery.each(data.error, function(i, val) {
              if (val == '1') { 
                $('#errors').show();
                $("#error_" + i).show();
              }
            });
					}
				}
			});
          
      return false;
    });
  });
});  