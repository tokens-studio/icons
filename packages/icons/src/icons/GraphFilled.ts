class GraphFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M12.304 11.013c.25-.033.505-.002.74.09l9 3.5.11.047c.208.101.39.249.532.432l.068.095.06.1a1.5 1.5 0 0 1-.867 2.156h-.002l-3.443 1.069-1.068 3.443-.001.002a1.5 1.5 0 0 1-2.83.099l-3.5-9.001a1.5 1.5 0 0 1-.072-.849l.026-.106c.07-.246.2-.47.381-.652l.08-.074c.194-.167.427-.281.678-.333zM22 5a3 3 0 0 1-5.814 1.032 11 11 0 0 0-6.964 3.189 11 11 0 0 0-3.189 6.965A2.998 2.998 0 0 1 5 21.999a3 3 0 0 1-.974-5.837A13 13 0 0 1 16.164 4.026 2.999 2.999 0 0 1 22 5" /></svg>`;
	}
}

customElements.define('icon-graphfilled', GraphFilled);
export default GraphFilled;
