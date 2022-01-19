// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class PropertiesDemo1 extends LitElement {
  static get properties() { return {
    prop1: { type: String },
    prop2: { type: Number },
    prop3: { type: Boolean },
    prop4: { type: Array },
    prop5: { type: Object }
  };}

  constructor() {
    super();
    this.prop1 = 'Hello World';
    this.prop2 = 5;
    this.prop3 = false;
    this.prop4 = [1,2,3];
    this.prop5 = { subprop1: 'The exiting subprop value' }
  }


  render(){
    return html`
      <h1>Properties demo 1</h1>
      <p>prop1: ${this.prop1}</p>
      <p>prop2: ${this.prop2}</p>
      <p>prop3: ${this.prop3}</p>

      <p>prop4: ${this.prop4.map((item, index) =>
        html`<span>[${index}]:${item}&nbsp;</span>`)}
      </p>

      <p>prop5:
        ${Object.keys(this.prop5).map(item =>
          html`<span>${item}: ${this.prop5[item]}&nbsp;</span>`)}
      </p>
    `;
  }
}
// Register the new element with the browser.
customElements.define('kpu-properties-demo1', PropertiesDemo1);