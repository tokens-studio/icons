class TextAlignJustify extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 10H3m18 8H3M21 6H3m18 8H3" /></svg>`;
	}
}

customElements.define('icon-textalignjustify', TextAlignJustify);
export default TextAlignJustify;
