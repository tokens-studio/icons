class Output extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 12h8m0 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm-1 7.5h3.5a7.5 7.5 0 0 0 0-15H10" /></svg>`;
	}
}

customElements.define('icon-output', Output);
export default Output;
