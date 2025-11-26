class DropShadowBottom extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 17v3c0 .546.146 1.059.401 1.5M20 17v3c0 .546-.146 1.059-.401 1.5M4.4 21.5A3 3 0 0 0 7 23h10c1.11 0 2.08-.603 2.599-1.5M4.4 21.5H19.6" opacity= /><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" /></svg>`;
	}
}

customElements.define('icon-dropshadowbottom', DropShadowBottom);
export default DropShadowBottom;
