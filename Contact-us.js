// Recieve mail in Gmail
function emailSend() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  if (!name || !email || !phone || !message) {
    swal('Oops...', 'All field are required!', 'error');
    return false;
  }

  var messageBody =
    "Name: " +
    name +
    "<br/> Email " +
    email +
    "<br/> Phone: " +
    phone +
    "<br/> Message: " +
    message;
  Email.send({
    SecureToken: "98a3bf57-15d6-4ede-85d6-46a9ca29a8b6",
    To: "chandrakantbudhalakoti189@gmail.com",
    From: "chetan.budhalakoti@gmail.com",
    Subject: "New Message from Apna Tasty Restaurant",
    Body: messageBody,
  }).then((message) => {
    if (message == "OK") {
      swal(
        "Thank You !!!",
        "We recieved your message we try to respond soon...",
        "success"
      );
    } else {
      swal("Error", "somthing happen !", "error");
    }
  });
}
