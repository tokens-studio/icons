class Configuration extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3.53 12.294 8.18 4.545a.6.6 0 0 0 .582 0l8.209-4.56M12 21.498V17m-.001-5V2m0 0 2.5 2.5m-2.5-2.5-2.5 2.5M21 12.356v4.294a.6.6 0 0 1-.308.525l-8.4 4.666a.6.6 0 0 1-.583 0l-8.4-4.666A.6.6 0 0 1 3 16.649v-4.294a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524" /></svg>`;
	}
}

customElements.define('icon-configuration', Configuration);
export default Configuration;
