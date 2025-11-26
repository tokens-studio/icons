class Lab extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M5.388 15 9.01 7.52V2h6.005v5.52L18.623 15M5.388 15l-2.25 4.65A1.636 1.636 0 0 0 4.61 22h14.784a1.636 1.636 0 0 0 1.474-2.348L18.623 15M5.388 15S9 17.5 12 15s6.623 0 6.623 0" /></svg>`;
	}
}

customElements.define('icon-lab', Lab);
export default Lab;
