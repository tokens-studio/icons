class FileDynamicSetFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M12.047 1.001c.494.023.928.457.952.951l.001.064v4.416c0 .252 0 .499.017.707.018.228.063.498.2.77a2 2 0 0 0 .875.873c.271.138.54.183.77.201.207.017.454.017.706.017h2.257a5 5 0 0 0-1.947 1.678 7.51 7.51 0 0 0-5.538 5.092A4.99 4.99 0 0 0 8 19.999l.007.258A4.98 4.98 0 0 0 9.003 23h-.244c-.805 0-1.47 0-2.011-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C3 18.711 3 18.046 3 17.242V6.758c0-.805 0-1.47.044-2.011.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C7.29 1 7.954 1 8.758 1H12z" /><path fill="currentColor" fillRule="evenodd" d="M20 10.5a3 3 0 0 1 0 6 3 3 0 0 1-2.82-1.984 3.5 3.5 0 0 0-3.088 2.692A2.998 2.998 0 0 1 13 23a3.001 3.001 0 0 1-.935-5.85 5.5 5.5 0 0 1 5.103-4.64A3 3 0 0 1 20 10.5M13.001 19A1 1 0 1 0 13 20.999 1 1 0 0 0 13 19M20 12.5c-.55 0-.995.453-1 1 .006.548.452 1 1 1a1 1 0 0 0 0-2" clipRule="evenodd" /><path fill="currentColor" d="M15.617 2.307c.137.033.233.129.424.32l3.332 3.332c.191.191.287.287.32.424a.54.54 0 0 1-.224.544C19.349 7 19.2 7 18.909 7h-3.11c-.279 0-.419 0-.526-.055a.5.5 0 0 1-.218-.218C15 6.62 15 6.48 15 6.2V3.092c0-.294 0-.44.074-.56a.54.54 0 0 1 .543-.225" /></svg>`;
	}
}

customElements.define('icon-filedynamicsetfilled', FileDynamicSetFilled);
export default FileDynamicSetFilled;
