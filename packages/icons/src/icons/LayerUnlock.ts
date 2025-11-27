class LayerUnlock extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11V6a4 4 0 0 0-8 0M7 20h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2Z" /></svg>`;
	}
}

customElements.define('icon-layerunlock', LayerUnlock);
export default LayerUnlock;
