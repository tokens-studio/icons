class Bull extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-width="2" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></svg>`;
	}
}

customElements.define('icon-bull', Bull);
export default Bull;
