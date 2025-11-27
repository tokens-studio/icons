class Unplug extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 5 3-3M2 22l3-3m2.5-5.5L10 11m.5 5.5L13 14m-6.7 6.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4zM12 6l6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0z" /></svg>`;
	}
}

customElements.define('icon-unplug', Unplug);
export default Unplug;
