class LayerLockFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M15 8a3 3 0 1 0-6 0v2h6zm2 2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3V8a5 5 0 0 1 10 0z" /></svg>`;
	}
}

customElements.define('icon-layerlockfilled', LayerLockFilled);
export default LayerLockFilled;
