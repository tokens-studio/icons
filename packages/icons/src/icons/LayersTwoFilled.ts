class LayersTwoFilled extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" fillRule="evenodd" d="M11.723 3.576a1.5 1.5 0 0 1 .554 0c.216.04.41.139.502.186l.026.013 9.642 4.822a1 1 0 0 1 0 1.788l-9.642 4.822-.026.012a2 2 0 0 1-.502.187 1.5 1.5 0 0 1-.554 0c-.216-.04-.41-.139-.502-.187l-.026-.012-9.642-4.822a1 1 0 0 1 0-1.788l9.642-4.822.026-.013c.093-.047.286-.146.502-.186" clipRule="evenodd" /><path fill="currentColor" d="m2.528 13.109-.975.488a1 1 0 0 0 0 1.788l9.642 4.821.026.013c.093.048.286.146.502.187a1.5 1.5 0 0 0 .554 0c.216-.04.41-.139.502-.187l.026-.013 9.642-4.82a1 1 0 0 0 0-1.79l-.975-.487-7.773 3.886-.011.006c-.05.025-.17.085-.29.137a3.5 3.5 0 0 1-2.043.234 3.5 3.5 0 0 1-.754-.233c-.12-.053-.24-.113-.289-.138l-.011-.006z" /></svg>`;
	}
}

customElements.define('icon-layerstwofilled', LayersTwoFilled);
export default LayersTwoFilled;
