class FileSettings extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 11H8m2 4H8m8-8H8m4 15H8.8c-1.7 0-2.5 0-3.2-.3-.6-.3-1-.7-1.3-1.3-.3-.7-.3-1.5-.3-3.2V6.8c0-1.7 0-2.5.3-3.2.3-.6.7-1 1.3-1.3C6.3 2 7.1 2 8.8 2h6.4c1.7 0 2.5 0 3.2.3.6.3 1 .7 1.3 1.3.3.7.3 1.5.3 3.2v4.7m-4.5 5.7-.9-.4m.9 2.6-.9.4m2.6-4.3-.4-.9m.4 6.5-.4.9m3-7.4-.4.9m.4 6.5-.4-.9m2.6-4.3-.9.4m.9 2.6-.9-.4m.2-1.1a3 3 0 1 1-6 0 3 3 0 0 1 6 0" /></svg>`;
	}
}

customElements.define('icon-filesettings', FileSettings);
export default FileSettings;
