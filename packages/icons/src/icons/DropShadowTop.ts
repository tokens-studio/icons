class DropShadowTop extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20 7V4c0-.546-.146-1.059-.401-1.5M4 7V4c0-.546.146-1.059.401-1.5m15.198 0A3 3 0 0 0 17 1H7c-1.11 0-2.08.603-2.599 1.5m15.198 0H4.4" opacity= /><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" /></svg>`;
	}
}

customElements.define('icon-dropshadowtop', DropShadowTop);
export default DropShadowTop;
