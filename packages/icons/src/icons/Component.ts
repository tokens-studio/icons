class Component extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15.1 4.8-2.2-2.2c-.3-.3-.5-.5-.7-.5-.1-.1-.3-.1-.4-.1-.2.1-.3.2-.7.5L8.9 4.8c-.3.3-.5.4-.5.6-.1.2-.1.3 0 .5s.2.3.5.7l2.2 2.2c.3.3.5.5.7.5.2.1.3.1.5 0s.3-.2.7-.5l2.2-2.2c.3-.3.5-.5.5-.7.1-.2.1-.3 0-.5s-.3-.3-.6-.6m6.3 6.3-2.2-2.2c-.3-.3-.5-.5-.7-.5-.2-.1-.3-.1-.5 0s-.3.2-.7.5l-2.2 2.2c-.3.3-.5.5-.5.7-.1.2-.1.3 0 .5s.2.3.5.7l2.2 2.2c.3.3.5.5.7.5.2.1.3.1.5 0s.3-.2.7-.5l2.2-2.2c.3-.3.5-.5.5-.7.1-.2.1-.3 0-.5 0-.2-.2-.4-.5-.7m-6.3 6.3-2.2-2.2c-.3-.3-.5-.5-.7-.5-.2-.1-.3-.1-.5 0s-.3.2-.7.5l-2.2 2.2c-.3.3-.5.5-.5.7-.1.2-.1.3 0 .5s.2.3.5.7l2.2 2.2c.3.3.5.5.7.5.2.1.3.1.5 0s.3-.2.7-.5l2.2-2.2c.3-.3.5-.5.5-.7.1-.2.1-.3 0-.5 0-.2-.2-.4-.5-.7m-6.3-6.3L6.6 8.9c-.3-.3-.5-.5-.7-.5-.2-.1-.3-.1-.5 0-.2 0-.3.2-.6.5l-2.2 2.2c-.3.3-.5.5-.5.7-.1.1-.1.3-.1.4.1.2.2.3.5.7l2.2 2.2c.3.3.5.5.7.5.2.1.3.1.5 0s.3-.2.7-.5l2.2-2.2c.3-.3.5-.5.5-.7.1-.2.1-.3 0-.5 0-.1-.2-.3-.5-.6" /></svg>`;
	}
}

customElements.define('icon-component', Component);
export default Component;
