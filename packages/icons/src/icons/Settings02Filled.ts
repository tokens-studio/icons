class Settings02Filled extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M14.126 9H3a1 1 0 0 1 0-2h11.126A4.002 4.002 0 0 1 22 8a4 4 0 0 1-7.874 1M6 12a4 4 0 1 0 3.874 5H21a1 1 0 1 0 0-2H9.874A4 4 0 0 0 6 12" /></svg>`;
	}
}

customElements.define('icon-settings02filled', Settings02Filled);
export default Settings02Filled;
