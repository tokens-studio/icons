class BooleanFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" fillRule="evenodd" d="M16 5a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5zm-4 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0" clipRule="evenodd" /></svg>`;
	}
}

customElements.define('icon-booleanfilled', BooleanFilled);
export default BooleanFilled;
