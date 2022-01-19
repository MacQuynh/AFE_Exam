class MyCard extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("my-card");
      let templateContent = template.content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
  
customElements.define(
  "my-card",
  MyCard
);
