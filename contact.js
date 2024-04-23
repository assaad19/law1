$(function() {
  // Form validation using jqBootstrapValidation
  $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
      preventSubmit: true,
      submitSuccess: function($form, event) {
          event.preventDefault(); // Prevent default form submission

          // Validate form inputs
          var name = $("input#myname").val();
          var email = $("input#email").val();
          var subject = $("input#subject").val();
          var message = $("textarea#message").val();

          if (!name || !email || !subject || !message) {
              // Show error message if any field is empty
              $("#success").html("<div class='alert alert-danger'>");
              $("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>");
              $("#success > .alert-danger").append($("<strong>").text("All fields are required."));
              $("#success > .alert-danger").append("</div>");
          } else {
              // Form is valid, proceed with form submission
              Email.send({
                  SecureToken:"66419858-fd46-41ba-9a66-efb72a5e6fac",
                  To: 'info@hasnaandshaker.com',
                  From: email,
                  Subject: subject,
                  Body: "From: " + name + "\nMessage: " + message
              }).then(function() {
                  // Email sent, submit the form
                  console.log(1);
                  console.log(email,name,message);
                  $form.unbind("submit").submit();
              });
          }
      },
      filter: function() {
          return $(this).is(":visible");
      },
  });

  // Clear success message when name input gains focus
  $("#myname").focus(function() {
      $("#success").html("");
  });
});
