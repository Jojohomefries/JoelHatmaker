 $(function () {
        $('.submit-contact').click(function (e) {
        e.preventDefault();
        $('.ajax-msg').html('');
        console.log($('#contact-form').serialize());
          $.ajax({
            type: 'post',
            url: 'post.php',
            data: $('#contact-form').serialize(),
            success: function(data) {
              //console.log(data);
              if (data === 'done') {
                $('.ajax-msg').html('<p>Thank you for your submission! I will get back to you as soon as possible.</p>');
              } else {
                 $('.ajax-msg').html('<p>Something went wrong! Please try again, or email me at <a href="mailto:joel@bdindependent.com">joel@bdindependent.com</a></p>');
              }
            }
          });
          //return false;
        });
      


 $(".form-row input, .form-row textarea").focus(function(){
      $(this).addClass("has-content");
  });
 $(".form-row input, .form-row textarea").blur(function(){
       if($(this).val() == ""){
        $(this).removeClass("has-content");
        }
  });



      });//end