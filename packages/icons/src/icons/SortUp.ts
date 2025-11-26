class SortUp extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14.5v-10m0 0 3 3m-3-3-3 3M4.5 19h14m-14-4.5H14M4.5 10H11M4.5 5.5H8" /></svg>`;
	}
}

customElements.define('icon-sortup', SortUp);
export default SortUp;
