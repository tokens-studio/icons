class Generic extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.3 9.998a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.044L16.3 8.898a.7.7 0 0 1-.572 1.1zM9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1M17.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" /></svg>`;
	}
}

customElements.define('icon-generic', Generic);
export default Generic;
