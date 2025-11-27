class VersionHistory extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v5l4 2M3 12a9 9 0 1 0 1.719-5.29m-.805-2.46v3.328H7.24" /></svg>`;
	}
}

customElements.define('icon-versionhistory', VersionHistory);
export default VersionHistory;
