class FontSize extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 13h6m-8 4 4.272-9.398c.231-.509.347-.763.507-.842a.5.5 0 0 1 .442 0c.16.079.276.333.507.842L14 17m4.5 0V7m0 10 1.5-1.5M18.5 17 17 15.5M18.5 7 20 8.5M18.5 7 17 8.5" /></svg>`;
  }
}

customElements.define("icon-fontsize", FontSize);
export default FontSize;
