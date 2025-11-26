class ArrowLeft extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m0 0 7 7m-7-7 7-7" /></svg>`;
	}
}

customElements.define('icon-arrowleft', ArrowLeft);
export default ArrowLeft;
