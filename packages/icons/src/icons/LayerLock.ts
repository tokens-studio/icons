class LayerLock extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M7 11a1 1 0 1 0 2 0H7m9-3h-1v3h2V8zm-8 3h1V8H7v3zm4-7v1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5zm0 0V3a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3zm-5 7v1h10v-2H7zm12 2h-1v5h2v-5zm-2 7v-1H7v2h10zM5 18h1v-5H4v5zm2 2v-1a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3zm12-2h-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-2-7v1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zM7 11v-1a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1z" /></svg>`;
	}
}

customElements.define('icon-layerlock', LayerLock);
export default LayerLock;
