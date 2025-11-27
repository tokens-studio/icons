class CaseUppper extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h6m-8 4 4.272-9.398c.231-.509.347-.763.507-.842a.5.5 0 0 1 .442 0c.16.079.276.333.507.842L12 17m3-5h3.5a2.5 2.5 0 0 0 0-5H15zm0 0h4.5a2.5 2.5 0 0 1 0 5H15z" /></svg>`;
	}
}

customElements.define('icon-caseuppper', CaseUppper);
export default CaseUppper;
