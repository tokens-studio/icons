class AccessibilityFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" fillRule="evenodd" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m5.948 8.007a1 1 0 0 0-1.168-.657l-.1.027-.003.002-.023.007-.09.03q-.123.04-.35.107c-.3.09-.72.212-1.2.332-.981.247-2.132.47-3.014.47s-2.033-.223-3.015-.47a27 27 0 0 1-1.548-.439l-.091-.03-.023-.007-.005-.002a1 1 0 0 0-.731 1.858l.096.038.003.001.007.003.029.01.105.033a28.565 28.565 0 0 0 1.672.475c.646.162 1.43.332 2.207.434l-1.919 6.826a1 1 0 0 0 1.926.54L12 14.02l1.287 4.577.033.096a1 1 0 0 0 1.915-.538l-.022-.1-1.92-6.824a20 20 0 0 0 2.208-.435 29 29 0 0 0 1.777-.509l.029-.009q.005 0 .008-.003h.003l.095-.039a1 1 0 0 0 .535-1.228M12 4.675a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" /></svg>`;
	}
}

customElements.define('icon-accessibilityfilled', AccessibilityFilled);
export default AccessibilityFilled;
