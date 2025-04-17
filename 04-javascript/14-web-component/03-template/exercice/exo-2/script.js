"use strict";
/* 
Shadow DOM and Template

this.attachShadow({ mode: 'open' });

Creates a shadow DOM to encapsulate styles and structure.

const template = document.createElement('template');
template.innerHTML = `...`;

Holds the inner HTML structure and styles of the component.

*/
class DialogBox extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });

      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          .box {
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 20px;
            background: white;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            max-width: 400px;
            position: relative;
          }
          slot {
            font-size: 1em;
            margin-bottom: 10px;
            color: #333;
          }
          button.close {
            position: absolute;
            top: 10px;
            right: 10px;
            border: none;
            color: white;
            border-radius: 50%;
            width: 25px;
            height: 25px;
            cursor: pointer;
          }
        </style>
        <div class="box">
          <slot name="title"></slot>
          <slot></slot>
          <button class="close">X</button>
        </div>
      `;
      /* Using Slots
    <slot name="title"></slot>
    <slot></slot>
    Named slot allows users to pass in custom <h2 slot="title">...</h2>.
    The unnamed slot handles any content like a <p> or buttons. */

      shadow.appendChild(template.content.cloneNode(true));
    }
    /*Styling and Close Button
    const closeButton = this.shadowRoot.querySelector('.close');
    closeButton.addEventListener('click', () => {
    this.style.display = 'none';
    */

    connectedCallback() {
    // Adds an event to hide the dialog when the close button (×) is clicked. */
      const closeButton = this.shadowRoot.querySelector('.close');
      closeButton.addEventListener('click', () => {
        this.style.display = 'none';
      });
    }
  }

  customElements.define('dialog-box', DialogBox);

 




