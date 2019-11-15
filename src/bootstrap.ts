import '@material/mwc-button';
import { html, render } from 'lit-html';

const app = document.querySelector('#app') as HTMLElement;

function base() {
  return html`
    hello world
    <mwc-button raised>working button</mwc-button>
  `;
}

render(base(), app);
