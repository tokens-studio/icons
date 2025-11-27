class String extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-8v8m8 2v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1m8-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m10 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0" /></svg>`;
	}
}

customElements.define('icon-string', String);
export default String;
