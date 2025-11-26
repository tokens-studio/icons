class ChevronDropdownFilled extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M15.613 9.589a1.286 1.286 0 0 1 1.814 1.822l-4.52 4.5c-.502.5-1.312.5-1.814.001l-4.524-4.5-.09-.098A1.286 1.286 0 0 1 8.285 9.5l.097.088L12 13.186z" /></svg>`;
	}
}

customElements.define('icon-chevrondropdownfilled', ChevronDropdownFilled);
export default ChevronDropdownFilled;
