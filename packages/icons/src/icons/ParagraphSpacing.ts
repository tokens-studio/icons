class ParagraphSpacing extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10h-8m8-4h-8m8 8h-8m8 4h-8m-7 2V4m0 16-3-3m3 3 3-3M6 4 3 7m3-3 3 3" /></svg>`;
	}
}

customElements.define('icon-paragraphspacing', ParagraphSpacing);
export default ParagraphSpacing;
