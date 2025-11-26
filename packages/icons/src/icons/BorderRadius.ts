class BorderRadius extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19v-1.2c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496C10.08 5 12.32 5 16.8 5H20M9 19v-4.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C11.28 10 12.12 10 13.8 10H20m-6 9v-4h6" /></svg>`;
	}
}

customElements.define('icon-borderradius', BorderRadius);
export default BorderRadius;
