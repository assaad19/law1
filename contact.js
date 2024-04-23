$(function () {
  // Form validation using jqBootstrapValidation
  $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitSuccess: function ($form, event) {
      event.preventDefault(); // Prevent default form submission

      // Validate form inputs
      var name = $("input#myname").val();
      var email = $("input#email").val();
      var subject = $("input#subject").val();
      var message = $("textarea#message").val();

      if (!name || !email || !subject || !message) {
        // Show error message if any field is empty
        $("#success").html("<div class='alert alert-danger'>");
        $("#success > .alert-danger").html(
          "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>"
        );
        $("#success > .alert-danger").append(
          $("<strong>").text("All fields are required.")
        );
        $("#success > .alert-danger").append("</div>");
      } else {
        // Form is valid, proceed with sending email
        Email.send({
          SecureToken: "e14f6e6a-1f33-4b72-be46-915a328c130b",
          To: "info@hasnaandshaker.com",
          From: "info@hasnaandshaker.com",
          Subject: subject,
          Body:
            "From: " +
            email +
            "<br>Name: " +
            name +
            "<br>Subject: " +
            subject +
            "<br><br>MESSAGE:<br><br>" +
            message,
        }).then(
          // Success callback function
          function (success) {
            // Email sent successfully, you can submit the form now
            $form.unbind("submit").submit();
            console.log("Message sent successfully");
          },
          // Error callback function
          function (error) {
            console.error("Error occurred while sending email:", error);
          }
        );
      }
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  // Clear success message when name input gains focus
  $("#myname").focus(function () {
    $("#success").html("");
  });
});
