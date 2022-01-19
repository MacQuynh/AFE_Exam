// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class OnFirstUpdate extends LitElement {
    static get properties() {
        return {
          textAreaId: { type: String },
          startingText: { type: String }
        };
      }

      constructor() {
        super();
        this.textAreaId = 'myText';
        this.startingText = 'Focus me on first update';
      }
      
      render() {
        return html`
          <textarea id="${this.textAreaId}">${this.startingText}</textarea>
        `;
      }

      firstUpdated(changedProperties) {
        const textArea = this.shadowRoot.getElementById(this.textAreaId);
        textArea.focus();
      }
}
// Register the new element with the browser.
customElements.define('kpu-on-first-update', OnFirstUpdate);