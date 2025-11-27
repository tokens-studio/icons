class AlignVerticalCenter extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12H3" opacity= /><path stroke="currentColor" stroke-width="2" d="M8.25 19.75h.5A.75.75 0 0 0 9.5 19V5a.75.75 0 0 0-.75-.75h-.5m0 15.5h-.5A.75.75 0 0 1 7 19V5a.75.75 0 0 1 .75-.75h.5m0 15.5V4.25m7.5 11.5h.5A.75.75 0 0 0 17 15V9a.75.75 0 0 0-.75-.75h-.5m0 7.5h-.5a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75h.5m0 7.5v-7.5" /></svg>`;
	}
}

customElements.define('icon-alignverticalcenter', AlignVerticalCenter);
export default AlignVerticalCenter;
