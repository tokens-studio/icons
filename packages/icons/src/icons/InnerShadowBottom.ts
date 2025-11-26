class InnerShadowBottom extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M6 16h12v2H6z" opacity= /><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" /></svg>`;
	}
}

customElements.define('icon-innershadowbottom', InnerShadowBottom);
export default InnerShadowBottom;
