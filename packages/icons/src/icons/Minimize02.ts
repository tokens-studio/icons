class Minimize02 extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14h6m0 0v6m0-6-7 7m17-11h-6m0 0V4m0 6 7-7" /></svg>`;
	}
}

customElements.define('icon-minimize02', Minimize02);
export default Minimize02;
