class InputFilled extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><g fill="currentColor" opacity=><path fillRule="evenodd" d="M10.571 6.287a5.714 5.714 0 1 0 0 11.428h2.858a1.429 1.429 0 1 1 0 2.858H10.57a8.571 8.571 0 0 1 0-17.143h2.858a1.429 1.429 0 1 1 0 2.857z" clipRule="evenodd" /><path d="M13.452 13.43a3.214 3.214 0 1 1 0-2.857h7.12a1.429 1.429 0 0 1 0 2.857z" /></g></svg>`;
	}
}

customElements.define('icon-inputfilled', InputFilled);
export default InputFilled;
