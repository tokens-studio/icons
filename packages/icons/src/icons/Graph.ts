class Graph extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 16.999a12 12 0 0 1 12-12m-12 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7.035-4.317a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033zM21 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0" /></svg>`;
	}
}

customElements.define('icon-graph', Graph);
export default Graph;
