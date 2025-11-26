class PlusSmall extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v10m-5-5h10" /></svg>`;
	}
}

customElements.define('icon-plussmall', PlusSmall);
export default PlusSmall;
