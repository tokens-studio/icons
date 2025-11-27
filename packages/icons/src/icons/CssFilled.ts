class CssFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" fillRule="evenodd" d="M18.353 2.046c1.38 0 2.481 1.114 2.5 2.46l-.012.273-1.22 13.029a3 3 0 0 1-1.892 2.512l-.213.075-4.633 1.425a3 3 0 0 1-1.548.059l-.217-.059-4.634-1.425a3 3 0 0 1-2.075-2.363l-.03-.224L3.159 4.779a2.5 2.5 0 0 1 2.49-2.733zM8 6.046a1 1 0 0 0 0 2h4.21l-4.26 2.416a1 1 0 0 0 .494 1.87h6.014l-.282 3.001L12 16l-2.178-.667-.115-1.237-.015-.102a1 1 0 0 0-1.981.186l.004.101.178 1.905.025.149c.083.337.339.61.677.715l3.112.952.145.033c.147.022.298.01.44-.033l3.112-.952a1 1 0 0 0 .702-.864l.444-4.761a1 1 0 0 0-.995-1.093h-3.322l4.26-2.416.139-.095a1 1 0 0 0-.465-1.761L16 6.046z" clipRule="evenodd" /></svg>`;
	}
}

customElements.define('icon-cssfilled', CssFilled);
export default CssFilled;
