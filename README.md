# Simple QR Code Generator

This is a simple, responsive web-based QR Code Generator built with HTML, CSS, and JavaScript. It allows users to input text or a URL and generate a QR code, with the added ability to choose a custom color for the QR code. The generator also includes input validation to ensure that a value is provided before generating the QR code.

## Features

- **Text/URL Input:** Users can enter any text or URL to generate a QR code.
- **Color Selection:** Users can choose a custom color for the QR code.
- **Validation:** The application checks that a value has been entered before generating the QR code and prompts the user if the input field is empty.
- **Responsive Design:** The interface is designed to be responsive and user-friendly across different devices.

## How to Use

1. **Enter Text or URL:** Type the desired text or URL into the input field.
2. **Select QR Code Color (Optional):** If desired, use the color picker to choose a color for your QR code.
3. **Generate QR Code:** Click the "Generate QR Code" button. The generated QR code will appear below the input field.
4. **Validation:** If the input field is empty, a validation message will appear prompting you to enter a value.

## Files

- `QR GENERATOR.html` - The main HTML file that structures the webpage.
- `QR GENERATOR.css` - The CSS file that styles the webpage.
- `QR GENERATOR.js` - The JavaScript file that handles QR code generation and validation.

## Project Structure

plaintext`
QR-Code-Generator/
│
├── QR GENERATOR.html
├── QR GENERATOR.css
├── QR GENERATOR.js
└── README.md`

# Dynamic QR Code Generator

This project is a simple QR Code Generator built using HTML, CSS, and JavaScript. Users can input text or a URL, choose the background and foreground colors, and generate a corresponding QR code.

## Features

- **Text or URL Input**: Enter any text or URL to generate a QR code.
- **Customizable Colors**: Choose background and foreground colors for the QR code.
- **Real-Time QR Code Generation**: The QR code is generated in real-time as you type.
- **Validation**: Alerts the user if the input field is empty.
- **Dynamic Styling**: The QR code container only shows a dashed border when a valid QR code is generated.

## How to Use

1. **Open the HTML File**
   Open `DYNAMIC QR GENERATOR.html` in your browser to start using the QR code generator.

2. **Enter Text or URL**
   - Type any text or URL in the input field.
   - Choose your preferred background and foreground colors using the color pickers.

3. **Generate the QR Code**
   - The QR code is generated automatically as you type.
   - The QR code container will have a dashed border when a valid QR code is generated.

## Code Overview

### HTML

The HTML file structures the QR code generator interface, including input fields for the text/URL, color pickers, and a download button.

### CSS

The CSS file styles the interface, ensuring a clean and user-friendly design. It also includes the styles for the dashed border that appears when a QR code is generated.

### JavaScript

The JavaScript file handles:
- Retrieving user input.
- Generating the QR code using the `QRCode` library.
- Applying a dashed border dynamically when a QR code is generated.

## Libraries Used

- [QRCode.js](https://davidshimjs.github.io/qrcodejs/): A JavaScript library for generating QR codes.

Feel free to contribute to this project by submitting issues or pull requests!

## Files

- `DYNAMIC QR GENERATOR.html` - The main HTML file that structures the webpage.
- `DYNAMIC QR GENERATOR.css` - The CSS file that styles the webpage.
- `DYNAMIC QR GENERATOR.js` - The JavaScript file that handles QR code generation and validation.
