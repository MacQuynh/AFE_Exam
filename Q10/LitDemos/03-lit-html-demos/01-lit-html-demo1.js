import {html, render} from 'lit-html';

let student = {
    name: "Donald Duck",
    grade: 7
}

// A function that returns a TemplateResult 
let myTemplate = (student) => html`
  <h1>${student.name}</h1>
  <h2>${student.grade}</h2>
  `;

// Add a TemplateResult to the DOM
const result = myTemplate(student);
render(result, document.body);
