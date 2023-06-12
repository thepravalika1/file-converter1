document.getElementById('convertBtn').addEventListener('click', function() {
    var fileInput = document.getElementById('pdfFileInput');
    var file = fileInput.files[0];
  
    if (file) {
      PDFconverter(file);
    }
  });
  
  function PDFconverter(file) {
    var formData = new FormData();
    formData.append('file', file);
  
    fetch('https://api.cloudconvert.com/v2', {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      return response.blob();
    })
    .then(function(blob) {
      var downloadLink = document.getElementById('downloadLink');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'converted.docx';
      downloadLink.style.display = 'block';
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
  }
  