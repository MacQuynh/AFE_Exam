// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class AwaitUpdateComplete extends LitElement {
    static get properties() {
        return {
          prop1: { type: Number }
        };
      }
    
      constructor() {
        super();
        this.prop1 = 0;
        this.addEventListener('DOMContentLoaded', this.handleLoaded);
      }
    
      render() {
        return html`
          <p>prop1: ${this.prop1}</p>
          <button @click="${this.changeProp}">prop1</button>
        `;
      }
      
      async changeProp() {
        this.prop1 = Math.random();
        await this.updateComplete;
        console.log('Update complete.');
      }
}
// Register the new element with the browser.
customElements.define('kpu-await-update-complete', AwaitUpdateComplete);