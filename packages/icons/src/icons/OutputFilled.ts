class OutputFilled extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><g fill="currentColor" opacity=><path fillRule="evenodd" d="M13.429 6.287a5.714 5.714 0 1 1 0 11.428H10.57a1.429 1.429 0 0 0 0 2.858h2.858a8.571 8.571 0 0 0 0-17.143H10.57a1.429 1.429 0 1 0 0 2.857z" clipRule="evenodd" /><path d="M10.548 13.43a3.214 3.214 0 1 0 0-2.857h-7.12a1.429 1.429 0 0 0 0 2.857z" /></g></svg>`;
	}
}

customElements.define('icon-outputfilled', OutputFilled);
export default OutputFilled;
