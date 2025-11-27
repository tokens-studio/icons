class SwatchBook extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a4 4 0 0 0 4 4m0 0h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.3M7 17h.01M11 8l2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.601a2.4 2.4 0 0 1 .026 3.434L9.9 19.801" /></svg>`;
	}
}

customElements.define('icon-swatchbook', SwatchBook);
export default SwatchBook;
