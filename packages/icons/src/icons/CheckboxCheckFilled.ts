class CheckboxCheckFilled extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M17.72 5.836a1.5 1.5 0 0 1 2.11 2.11l-.103.115-9.166 9.167a1.5 1.5 0 0 1-2.121 0L4.273 13.06l-.104-.115a1.5 1.5 0 0 1 2.11-2.11l.115.104 3.105 3.105 8.107-8.105z" /></svg>`;
  }
}

customElements.define("icon-checkboxcheckfilled", CheckboxCheckFilled);
export default CheckboxCheckFilled;
