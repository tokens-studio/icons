class Input extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M21 12h-8m0 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm1-7.5h-3.5a7.5 7.5 0 1 0 0 15H14" opacity= /></svg>`;
	}
}

customElements.define('icon-input', Input);
export default Input;
