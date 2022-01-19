// my-element.js
// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit';
// Extend the LitElement base class
class MyElement extends LitElement {
// Implement render to define a template for your element.
render(){
// Use the html helper function to return a tagged template literal
return html`
<h2>Hello Lit-World</h2>
`;
}
}
// Register the new element with the browser.
customElements.define('my-element', MyElement);