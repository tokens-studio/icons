class BullFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>`;
	}
}

customElements.define('icon-bullfilled', BullFilled);
export default BullFilled;
