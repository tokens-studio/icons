class DistributeVertical extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-width="2" d="M6.25 12v.5c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75V12m-11.5 0v-.5a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 .75.75v.5m-11.5 0h11.5" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 4H3m18 16H3" opacity= /></svg>`;
	}
}

customElements.define('icon-distributevertical', DistributeVertical);
export default DistributeVertical;
