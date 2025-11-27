class CodeSnippet extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 17 5-5-5-5M7 7l-5 5 5 5m7-14-4 18" /></svg>`;
	}
}

customElements.define('icon-codesnippet', CodeSnippet);
export default CodeSnippet;
