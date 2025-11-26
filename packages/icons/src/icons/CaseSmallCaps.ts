class CaseSmallCaps extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13h6m-8 4 4.272-9.398c.231-.509.347-.763.507-.842a.5.5 0 0 1 .442 0c.16.079.276.333.507.842L13 17m3-3.5h2.5c.986 0 1.786-.784 1.786-1.75S19.486 10 18.5 10H16zm0 0h3.214c.987 0 1.786.784 1.786 1.75S20.2 17 19.214 17H16z" /></svg>`;
	}
}

customElements.define('icon-casesmallcaps', CaseSmallCaps);
export default CaseSmallCaps;
