class CaseLower extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 11v6m3-9v9m-3-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0m9 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0" /></svg>`;
	}
}

customElements.define('icon-caselower', CaseLower);
export default CaseLower;
