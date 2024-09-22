$("#generate-btn").on("click", function() {
    input_value = $("#qr-input").val(); // Get input value

    // Check if the input given by the user is empty or not
    if (input_value.trim() === "" || input_value === undefined) {
        alert("Please enter a valid URL");
        return;
    }

    // Display the input value for now
    $('#input-chk').html(input_value);

    // Generate QR code and display it
    const qr = new QRious({
        element: document.getElementById('qr-output'), // Use a canvas element
        value: input_value.trim(),
        size: 200 // Size of the QR code
    });
});


$("#download-btn").on("click",function(){
    const canvas = document.getElementById('qr-output');
    const image = canvas.toDataURL('image/png').replace("image/png", 'image/octet-stream');
    const link  = document.createElement('a');
    link.href = image;
    link.download = 'qrcode.png';
    link.click();
});