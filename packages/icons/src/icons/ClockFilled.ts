class ClockFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" fillRule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m12-6a1 1 0 1 0-2 0v6a1 1 0 0 0 .553.894l4 2a1 1 0 1 0 .894-1.788L13 11.382z" clipRule="evenodd" /></svg>`;
	}
}

customElements.define('icon-clockfilled', ClockFilled);
export default ClockFilled;
