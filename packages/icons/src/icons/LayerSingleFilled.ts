class LayerSingleFilled extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" fillRule="evenodd" d="M11.723 6.085a1.5 1.5 0 0 1 .554 0 1.9 1.9 0 0 1 .528.2l9.642 4.82a1 1 0 0 1 0 1.79l-9.642 4.82-.026.014c-.093.047-.286.146-.502.186a1.5 1.5 0 0 1-.554 0c-.216-.04-.41-.139-.502-.186l-.026-.014-9.642-4.82a1 1 0 0 1 0-1.79l9.642-4.82.026-.014c.093-.047.286-.146.502-.186" clipRule="evenodd" /></svg>`;
	}
}

customElements.define('icon-layersinglefilled', LayerSingleFilled);
export default LayerSingleFilled;
