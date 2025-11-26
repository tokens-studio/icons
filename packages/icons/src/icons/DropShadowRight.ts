class DropShadowRight extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M17 20h3c.546 0 1.059-.146 1.5-.401M17 4h3c.546 0 1.059.146 1.5.401m0 15.198A3 3 0 0 0 23 17V7c0-1.11-.603-2.08-1.5-2.599m0 15.198V4.4" opacity= /><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" /></svg>`;
  }
}

customElements.define("icon-dropshadowright", DropShadowRight);
export default DropShadowRight;
