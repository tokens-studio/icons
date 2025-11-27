class DropShadowLeft extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M7 4H4c-.546 0-1.059.146-1.5.401M7 20H4a3 3 0 0 1-1.5-.401M2.5 4.4A3 3 0 0 0 1 7v10c0 1.11.603 2.08 1.5 2.599M2.5 4.4V19.6" opacity= /><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" /></svg>`;
	}
}

customElements.define('icon-dropshadowleft', DropShadowLeft);
export default DropShadowLeft;
