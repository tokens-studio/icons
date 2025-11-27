class RefreshCw02 extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 5.125A8.5 8.5 0 0 1 12 20.5h-.5M7 18.875A8.5 8.5 0 0 1 12 3.5h.5m.5 18.9-2-2 2-2M11 5.6l2-2-2-2" /></svg>`;
	}
}

customElements.define('icon-refreshcw02', RefreshCw02);
export default RefreshCw02;
