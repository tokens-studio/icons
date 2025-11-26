class LayerUnlockFilled extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M20 18a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h8V6a3 3 0 1 0-6 0 1 1 0 0 1-2 0 5 5 0 0 1 10 0v4a3 3 0 0 1 3 3z" /></svg>`;
  }
}

customElements.define("icon-layerunlockfilled", LayerUnlockFilled);
export default LayerUnlockFilled;
