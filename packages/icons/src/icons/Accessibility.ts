class Accessibility extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 10.325 2.25 8m-2.25-8-2.25 8m2.25-8c-2.02 0-5-1-5-1m5 1c2.02 0 5-1 5-1M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-9-5.325a1 1 0 1 1-2 0 1 1 0 0 1 2 0" /></svg>`;
	}
}

customElements.define('icon-accessibility', Accessibility);
export default Accessibility;
