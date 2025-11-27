class SortDown extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9.5v10m0 0 3-3m-3 3-3-3M4.5 5h14m-14 4.5H14M4.5 14H11m-6.5 4.5H8" /></svg>`;
	}
}

customElements.define('icon-sortdown', SortDown);
export default SortDown;
