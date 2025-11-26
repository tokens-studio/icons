class Typing extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18H6a3 3 0 0 1-3-3v-1m6 4-3 3m3-3-3-3m8-12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m5-8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-.5 4h2v6M19 21h3M5 3h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m9 12a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0v-2a2 2 0 0 1 2-2" /></svg>`;
	}
}

customElements.define('icon-typing', Typing);
export default Typing;
