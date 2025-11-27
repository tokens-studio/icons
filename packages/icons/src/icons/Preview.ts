class Preview extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1M3 17v1a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1m-8-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5.944.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" /></svg>`;
	}
}

customElements.define('icon-preview', Preview);
export default Preview;
