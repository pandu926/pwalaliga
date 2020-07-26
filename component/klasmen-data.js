class KlasmenData extends HTMLElement {
     connectedCallback () {
        this.render();
    }
    render (){
        this.innerHTML = "";
    }
}

customElements.define("klasmen-data",KlasmenData);