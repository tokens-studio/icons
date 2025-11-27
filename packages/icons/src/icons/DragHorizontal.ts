class DragHorizontal extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 7.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M13 7.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M20 7.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M6 16.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M13 16.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M20 16.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0" /></svg>`;
	}
}

customElements.define('icon-draghorizontal', DragHorizontal);
export default DragHorizontal;
