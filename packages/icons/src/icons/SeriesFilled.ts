class SeriesFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M20 13a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3z" /><path fill="currentColor" d="M14 7a3 3 0 0 1 3 3v1h-1a5 5 0 0 0-5 5v1h-1a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3z" /><path fill="currentColor" d="M8 1a3 3 0 0 1 3 3v1h-1a5 5 0 0 0-5 5v1H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3z" /></svg>`;
	}
}

customElements.define('icon-seriesfilled', SeriesFilled);
export default SeriesFilled;
