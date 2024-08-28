document.addEventListener("DOMContentLoaded", () => {
    const qrText = document.getElementById("qrText"),
        colorLight = document.getElementById("colorLight"),
        colorDark = document.getElementById("colorDark"),
        qrCodeView = document.querySelector(".qrCodeView");

    function generateQRCode() {
        if (qrText.value.trim() === "") {
            qrCodeView.classList.remove("visible"); // Hide the QR code view
            return;
        }

        qrCodeView.innerHTML = ""; // Clear any existing QR code

        new QRCode(qrCodeView, {
            text: qrText.value,
            colorLight: colorLight.value,
            colorDark: colorDark.value
        });

        qrCodeView.classList.add("visible"); // Show the QR code view with border
    }

    window.generateQRCode = generateQRCode;
});
