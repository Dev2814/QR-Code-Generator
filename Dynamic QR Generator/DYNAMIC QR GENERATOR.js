document.addEventListener("DOMContentLoaded", () => {
    const qrText = document.getElementById("qrText"),
        colorLight = document.getElementById("colorLight"),
        colorDark = document.getElementById("colorDark"),
        qrCodeView = document.querySelector(".qrCodeView");

    function generateQRCode() {
        if (qrText.value.trim() === "") {
            qrCodeView.classList.remove("visible"); 
            return;
        }

        qrCodeView.innerHTML = "";
        new QRCode(qrCodeView, {
            text: qrText.value,
            colorLight: colorLight.value,
            colorDark: colorDark.value
        });

        qrCodeView.classList.add("visible");
    }

    window.generateQRCode = generateQRCode;
});
