var selection = "BASE";

function getSelectedOption(sel) {
    //console.log(sel.options[sel.selectedIndex].value);
    //var selectedOption = document.querySelector('input[name="option"]:checked').value;
    selection = sel.options[sel.selectedIndex].value
    console.log(selection); 
}

function commitSelectedOption() {
    console.log("Commit:" + selection); 
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
            console.log("OnClick Triggered");
	    //const el = document.getElementById("myBtn");
	    //console.log("el");
	}

    }

    customElements.define('custom-button', PerformanceHelp);
})();
