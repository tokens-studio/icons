class BorderStyle extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M21 7a1 1 0 1 0 0-2v2M3 5a1 1 0 0 0 0 2V5m2.5 8a1 1 0 1 0 0-2v2M3 11a1 1 0 1 0 0 2v-2m18 2a1 1 0 1 0 0-2v2m-2.5-2a1 1 0 1 0 0 2v-2M14 13a1 1 0 1 0 0-2v2m-4-2a1 1 0 1 0 0 2v-2m11.743 7.658a1 1 0 1 0-1.486-1.338l.743.669zm-1.496-1.327a1 1 0 1 0 1.486 1.338L20.99 18zm-3.002 1.327a1 1 0 1 0-1.486-1.338l.743.669zm-1.496-1.327a1 1 0 1 0 1.486 1.338L16.492 18zm-3.001 1.327a1 1 0 1 0-1.486-1.338l.743.669zm-1.496-1.327a1 1 0 0 0 1.486 1.338L11.995 18zM8.25 18.658a1 1 0 1 0-1.486-1.338l.743.669zm-1.496-1.327a1 1 0 1 0 1.486 1.338L7.497 18zm-3.001 1.327a1 1 0 1 0-1.486-1.338l.743.669zm-1.496-1.327a1 1 0 1 0 1.486 1.338L3 18zM21 6V5H3v2h18zM5.5 12v-1H3v2h2.5zM21 12v-1h-2.5v2H21zm-7 0v-1h-4v2h4zm7 5.989-.743-.67-.01.012.743.669.743.67.01-.012zm-4.498 0-.742-.67-.01.012.742.669.743.67.01-.012zm-4.497 0-.743-.67-.01.012.743.669.743.67.01-.012zm-4.498 0-.743-.67-.01.012.743.669.743.67.01-.012zm-4.497 0-.743-.67-.01.012L3 18l.743.67.01-.012z" /></svg>`;
	}
}

customElements.define('icon-borderstyle', BorderStyle);
export default BorderStyle;
