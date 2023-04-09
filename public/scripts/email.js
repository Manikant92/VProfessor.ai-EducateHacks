$(document).ready(function () {
  $("#email").submit(function (event) {
    event.preventDefault()
    var id = $("#address").val()
    var content = $("#transcript-text").val()
    sendEmail(id, content)
  })

  function sendEmail(emailID, content) {
    Email.send({
      Host: "------------------------",
      Username: "----------------------",
      Password: "--------------------------",
      To: emailID,
      From: "-------------------",
      Subject: "Your personalized study notes from VProfessorAI",
      Body: content,
    })
      .then(function (message) {
        alert("Check your inbox for your personalized notes!")
      });
  }


})