class NumberFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M13.5 10.5v3h-3v-3z" /><path fill="currentColor" fillRule="evenodd" d="M16.254 2c.8 0 1.46 0 1.998.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564C22 6.286 22 6.947 22 7.746v8.508c0 .8 0 1.46-.044 1.998-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.538.044-1.199.044-1.998.044H7.746c-.8 0-1.46 0-1.998-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C2 17.714 2 17.053 2 16.254V7.746c0-.8 0-1.46.044-1.998.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C6.286 2 6.947 2 7.746 2zM14.5 6.5a1 1 0 0 0-1 1v1h-3v-1a1 1 0 1 0-2 0v1H8a1 1 0 0 0 0 2h.5v3H8a1 1 0 1 0 0 2h.5v1a1 1 0 1 0 2 0v-1h3v1a1 1 0 1 0 2 0v-1h.5a1 1 0 1 0 0-2h-.5v-3h.5a1 1 0 1 0 0-2h-.5v-1a1 1 0 0 0-1-1" clipRule="evenodd" /></svg>`;
	}
}

customElements.define('icon-numberfilled', NumberFilled);
export default NumberFilled;
