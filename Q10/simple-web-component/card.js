class MyCard extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode:"open"});
      shadowRoot.innerHTML = `<div class="inside-component">Trangs  Demo</div>`
      ;
     }
    
     connectedCallback() {
        // this.innerHTML = `<div class="inside-component">Trangs demo</div>`
    }
   }
  
   if (!customElements.get('my-card')) {
    customElements.define('my-card',
    MyCard);
    }