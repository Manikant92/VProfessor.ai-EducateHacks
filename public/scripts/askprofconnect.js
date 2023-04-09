// This is where we will connect the application to the backend
const form = document.getElementById("question-form");
const input = document.getElementById("question-input");
const insertlocation = document.getElementById("insert-col");

// sends the link in form of a json
form.onsubmit = function (event) {

  event.preventDefault();

  console.log("input: " + input.value);

  var jsonData = [{ "question": input.value }];

  console.log(jsonData);

  if (input.value.trim() != "") {
    jQuery.ajax({
      url: '/getAnswer',
      dataType: "json",
      data: JSON.stringify({ Question: jsonData }),
      cache: false,
      contentType: "application/json; charset=utf-8",
      processData: false,
      method: 'POST',
      type: 'POST',
      success: function (data) {
        console.log(data);
        var shake = " pulse animated";
        if (data === "I do not know the answer to that question, maybe make sense next time" || data === "No short answer available")
          shake = " jello animated";
        insertlocation.innerHTML = "<div class='card" + shake + "'><div class='card-header'><h5 class='mb-0' style='font-size: 'Inter';'>The VProfessor Says...</h5></div><div class='card-body'><p class='card-text' style='font-family: 'Inter';'><strong>" + data + "</strong></p></div></div>";
      }
    });
    console.log("Data successfully sent to backend: question");
  }
}