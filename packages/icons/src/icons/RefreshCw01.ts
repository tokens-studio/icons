class RefreshCw01 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 10s-2.005-2.732-3.634-4.362a9 9 0 1 0 2.282 8.862M22 10V4m0 6h-6" /></svg>`;
  }
}

customElements.define("icon-refreshcw01", RefreshCw01);
export default RefreshCw01;
