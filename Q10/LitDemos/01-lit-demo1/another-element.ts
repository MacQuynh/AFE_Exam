/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import {
    LitElement, html, customElement, property
  } from 'lit-element';
  
  /**
   * Use the customElement decorator to define your class as
   * a custom element. Registers <my-element> as an HTML tag.
   */
  @customElement('another-element')
  export class AnotherElement extends LitElement {
  
    /**
     * Create an observed property. Triggers update on change.
     */
    @property()
    foo = 'This text originates from a property';
  
    /**
     * Implement `render` to define a template for your element.
     */
    render(){
      /**
       * Use JavaScript expressions to include property values in
       * the element template.
       */
      return html`<p>A typescript demo: <em>${this.foo}</em></p>`;
    }
  }