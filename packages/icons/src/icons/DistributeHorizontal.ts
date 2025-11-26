class DistributeHorizontal extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 21V3m16 18V3" opacity= /><path stroke="currentColor" stroke-width="2" d="M12 6.25h.5a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75H12m0-11.5h-.5a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h.5m0-11.5v11.5" /></svg>`;
	}
}

customElements.define('icon-distributehorizontal', DistributeHorizontal);
export default DistributeHorizontal;
