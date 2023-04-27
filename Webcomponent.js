// Set up the HTML code as a string
const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Radio Button Example</title>
    </head>
    <body>
        <label>
            <input type="radio" name="option" value="option1" checked>Option 1
        </label>
        <label>
            <input type="radio" name="option" value="option2">Option 2
        </label>
        <br><br>
        <button onclick="sendSelectedOption()">Send Selected Option</button>
        <br><br>
        <p id="output"></p>

        <script>
            function sendSelectedOption() {
                // Get the selected radio button
                var selectedOption = document.querySelector('input[name="option"]:checked').value;

                // Set up the API endpoint URL
                const apiUrl = 'https://example.com/odata/v1/endpoint';

                // Set up the request headers
                const headers = new Headers();
                headers.append('Content-Type', 'application/json');

                // Set up the request body data
                const body = JSON.stringify({ selectedOption: selectedOption });

                // Set up the request options
                const options = {
                    method: 'POST',
                    headers: headers,
                    body: body,
                };

                // Send the API request
                fetch(apiUrl, options)
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error(error));

                // Display a confirmation message in the output paragraph
                document.getElementById("output").innerHTML = "Selected option sent to API: " + selectedOption;
            }
        </script>
    </body>
    </html>
`;

// Write the HTML code to the document
document.write(html);
