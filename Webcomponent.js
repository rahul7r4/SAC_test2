var selectedOption = "BASE";

function getSelectedOption(sel) {
    //console.log(sel.options[sel.selectedIndex].value);
    //var selectedOption = document.querySelector('input[name="option"]:checked').value;
    selectedOption = sel.options[sel.selectedIndex].value
    console.log(selectedOption); 
}

function commitSelectedOption() {
    console.log("Commit:" + selectedOption); 
    const username = "sb-04a2113b-18e8-434e-ad82-38a9c9c53f02!b94776|it-rt-1f27c60btrial!b26655";
    const password = "0a68f493-2401-4a1a-8ce7-1c6b566c06e0$woMqw0mfMJoMns1CD8VDfOFABksxpiUTNJp1V4tR4kA=";
    const auth = 'Basic' + btoa(username + ':' + password);
    const apiUrl = 'https://1f27c60btrial.it-cpitrial05-rt.cfapps.us10-001.hana.ondemand.com/http/sac_to_s/4hana';
    // Set up the request headers
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // Set up the request body data
    const body = JSON.stringify({ Version: selectedOption });
    // Set up the request options
    const options = {
    method: 'POST',
    headers: headers,
    body: body,
    };
    //console.log(options);
    //console.log(body);
    // Send the API request
    fetch(apiUrl, options)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.error(error));
	
}

(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `
<select id="box1" onChange="getSelectedOption(this);">
  <option value="BASE">BASE</option>
  <option value="SCEN1">SCEN1</option>
</select>
<button type="button" id="myBtn" onclick="commitSelectedOption()">Commit Version</button>
` ;   

    class PerformanceHelp extends HTMLElement {
        constructor() {
            super();
            this.init();           
        }

        init() {              
            let shadowRoot = this.attachShadow({mode: "open"});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.addEventListener("click", event => {
            var event = new Event("onClick");
            this.fireChanged();           
            this.dispatchEvent(event);
            });           
        }

	fireChanged() {
            //console.log("OnClick Triggered");
	    //const el = document.getElementById("myBtn");
	    //console.log("el");
	}

    }

    customElements.define('custom-button', PerformanceHelp);
})();
