class CheckboxMinusFilled extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="m17.834 10.5.153.008a1.5 1.5 0 0 1 0 2.984l-.153.008H6.167a1.5 1.5 0 0 1 0-3z" /></svg>`;
  }
}

customElements.define("icon-checkboxminusfilled", CheckboxMinusFilled);
export default CheckboxMinusFilled;
