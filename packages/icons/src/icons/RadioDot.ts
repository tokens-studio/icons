class RadioDot extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-width="2" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" /></svg>`;
	}
}

customElements.define('icon-radiodot', RadioDot);
export default RadioDot;
