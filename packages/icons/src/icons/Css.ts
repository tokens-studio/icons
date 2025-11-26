class Css extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7.046h8l-7.556 4.286h7.111l-.444 4.762-3.111.952-3.111-.952-.178-1.905M5.647 3.046h12.706a1.5 1.5 0 0 1 1.493 1.64l-1.221 13.029a2 2 0 0 1-1.403 1.725l-4.634 1.425a2 2 0 0 1-1.176 0L6.778 19.44a2 2 0 0 1-1.403-1.725L4.154 4.686a1.5 1.5 0 0 1 1.493-1.64" /></svg>`;
	}
}

customElements.define('icon-css', Css);
export default Css;
