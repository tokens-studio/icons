class AlignRight extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21V3" opacity= /><path stroke="currentColor" stroke-width="2" d="M4.5 15.75v.5c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75v-.5m-11.5 0v-.5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 .75.75v.5m-11.5 0H16m-5.5-7.5v.5c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75v-.5m-5.5 0v-.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.5m-5.5 0H16" /></svg>`;
	}
}

customElements.define('icon-alignright', AlignRight);
export default AlignRight;
