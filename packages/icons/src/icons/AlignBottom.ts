class AlignBottom extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 20H3" opacity= /><path stroke="currentColor" stroke-width="2" d="M8.25 4.5h.5a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75h-.5m0-11.5h-.5a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h.5m0-11.5V16m7.5-5.5h.5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-.5m0-5.5h-.5a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h.5m0-5.5V16" /></svg>`;
	}
}

customElements.define('icon-alignbottom', AlignBottom);
export default AlignBottom;
