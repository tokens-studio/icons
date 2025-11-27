class StyleFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M7 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8M17 13a4 4 0 1 1 0 8 4 4 0 0 1 0-8M17 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8M7 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8" /></svg>`;
	}
}

customElements.define('icon-stylefilled', StyleFilled);
export default StyleFilled;
