document.getElementById("generatePDF").addEventListener("click", function() {
    var doc = new jsPDF();
    console.log("generatePDF clicked")
    var body = getFrameContents();
    var element1 = body.getElementById("transcript");
    doc.fromHTML(element1, 15, 15, {
        'width': 170
    });
    

    // Save the PDF
    timestamp = new Date().getTime().toString();
    doc.save('transcript' + timestamp + '.pdf');
});

function getFrameContents() {
    var iFrame = document.getElementById('transcript-text');
    var iFrameBody;
    if (iFrame.contentDocument) { // FF
        iFrameBody = iFrame.contentDocument;
    } else if (iFrame.contentWindow) { // IE
        iFrameBody = iFrame.contentWindow.document;
    }
    //alert(iFrameBody.innerHTML);
    console.log(iFrameBody);
    return iFrameBody;
}