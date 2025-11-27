class Releases extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V7m0 0-3 3m3-3 3 3M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5m0 0A2.5 2.5 0 0 1 6.5 17H20" /></svg>`;
	}
}

customElements.define('icon-releases', Releases);
export default Releases;
