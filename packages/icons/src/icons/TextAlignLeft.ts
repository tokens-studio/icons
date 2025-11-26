class TextAlignLeft extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10H3m17-4H3m17 8H3m13 4H3" /></svg>`;
  }
}

customElements.define("icon-textalignleft", TextAlignLeft);
export default TextAlignLeft;
