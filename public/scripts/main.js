const imgForm = document.getElementById("imgForm");
const img = document.getElementById("img");

imgForm.onsubmit = function (event) {
  event.preventDefault();
  const file = img.files[0];
  console.log(file.value);

  const formData = new FormData();
  formData.append("myFiles[]", file);
  console.log(formData);

  jQuery.ajax({
    url: '/uploadIMG',
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    method: 'POST',
    type: 'POST', // For jQuery < 1.9
    success: function (data) {
      console.log("data: " + data);
      document.getElementById("transcript-text").innerHTML = data;
    }
  });
  console.log("Data Sent");
}
