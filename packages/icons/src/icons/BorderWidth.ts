class BorderWidth extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 5.5H3m18 5H3v1h18zm0 8H3v-2h18z" /></svg>`;
	}
}

customElements.define('icon-borderwidth', BorderWidth);
export default BorderWidth;
