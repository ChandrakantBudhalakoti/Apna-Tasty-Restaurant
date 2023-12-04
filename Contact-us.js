function validateForm() {
  // Retrieve input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Validate email using regex
  var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!re.test(email)) {
    document.getElementById("emailError").classList.remove("d-none");
    return false;
  } else {
    document.getElementById("emailError").classList.add("d-none");
  }

  // Validate phone number using regex
  var rePhone = /^\d{10}$/;
  if (!rePhone.test(phone)) {
    document.getElementById("phoneError").classList.remove("d-none");
    return false;
  } else {
    document.getElementById("phoneError").classList.add("d-none");
  }

  // Check if email domain is from a known temporary email provider
  var tempEmailProviders = [
    "tempmail.com",
    "emltmp.com",
    "spymail.one",
    "freeml.net",
    "zeroe.ml",
    "10mail.tk",
    "emlpro.com",
    "dropmail.me",
    "minimail.gq",
    "flymail.tk",
    "laste.ml",
    "10mail.org",
    "yomail.info",
    "emlhub.com",
    "guerrillamail.com",
    "10minutemail.com",
  ];
  var isTempEmail = tempEmailProviders.some(function (provider) {
    return email.endsWith("@" + provider);
  });

  if (isTempEmail) {
    document.getElementById("emailError").classList.remove("d-none");
    document.getElementById("emailError").innerHTML =
      "Temporary email addresses are not allowed.";
    return false;
  } else {
    document.getElementById("emailError").classList.add("d-none");
  }

  return true;
}

function emailSend() {
  // Check form validation
  if (!validateForm()) {
    return false;
  }

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Create message body
  var messageBody =
    "<b>Name: </b>" +
    name +
    "<br> <b>Email: </b>" +
    email +
    "<br> <b>Phone: </b>" +
    phone +
    "<br> <b>Message: </b>" +
    message;

  // Send email using Email.js
  Email.send({
    SecureToken: "98a3bf57-15d6-4ede-85d6-46a9ca29a8b6",
    To: "chandrakantbudhalakoti189@gmail.com",
    From: "chetan.budhalakoti@gmail.com",
    Subject: "Apna Tasty Restaurant - New Enquiry",
    Body: messageBody,
  }).then(function (message) {
    // Show success alert
    swal(
      "Thank You !!!",
      "We recieved your message we try to respond soon...",
      "success"
    );
  });

  return false;
}

// Checks for form submission event
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Prevents the default form submission behavior
    event.preventDefault();
    // Sends the email
    emailSend();
  });
