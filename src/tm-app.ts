import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import '@dile/ui/components/nav/nav.js';

@customElement('tm-app')
export class TmApp extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
    <div>
    </div>
    `;
  }
}
