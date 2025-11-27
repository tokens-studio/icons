class FontFamilyFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M13.385 10h-2.27l1.135-1.985z" /><path fill="currentColor" fillRule="evenodd" d="M16.854 1c.52 0 .97 0 1.341.03.396.033.79.104 1.167.297a3 3 0 0 1 1.311 1.31c.193.379.265.772.297 1.168.03.37.03.82.03 1.341V19c0 .46-.003.86-.03 1.195-.032.396-.104.789-.297 1.167a3 3 0 0 1-1.31 1.31c-.379.194-.772.265-1.168.298-.37.03-.82.03-1.341.03H8.745c-.799 0-1.459 0-1.997-.044-.562-.046-1.079-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564-.055-.668-.044-1.34-.044-2.01V6.744c0-.799 0-1.459.044-1.997.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C7.286 1 7.946 1 8.745 1zM7 17a2 2 0 0 0-1.983 1.74c-.067.511.022.817.2 1.168a2 2 0 0 0 .875.874c.156.08.38.145.82.18C7.361 21 7.943 21 8.8 21h8c.576 0 .949 0 1.232-.023.272-.023.373-.061.422-.086a1 1 0 0 0 .437-.437c.025-.05.063-.15.085-.422C19.058 19.03 19 18.005 19 17zm5.25-12a1 1 0 0 0-.795.393l-.073.11-4 7a1 1 0 0 0 1.736.993L9.973 12h4.554l.855 1.496.055.086a1 1 0 0 0 1.727-.987l-.046-.091-4-7A1 1 0 0 0 12.25 5" clipRule="evenodd" /></svg>`;
	}
}

customElements.define('icon-fontfamilyfilled', FontFamilyFilled);
export default FontFamilyFilled;
