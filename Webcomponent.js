(function () {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = 
    `
<input type="radio" name="option" value="BASE" checked>BASE
<input type="radio" name="option" value="SCEN1">SCEN1
<button type="button" id="myBtn" onclick="getSelectedOption()>Commit Version</button>
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
            console.log("OnClick Triggered");     
            var selectedOption = document.querySelector('input[name="option"]:checked').value;
	    console.log("selectedOption"); }
	                     
    }

    customElements.define('custom-button', PerformanceHelp);
})();
