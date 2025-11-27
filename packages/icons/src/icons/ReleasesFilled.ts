class ReleasesFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" fillRule="evenodd" d="M16.839 1c.527 0 .982 0 1.356.03.396.033.79.104 1.167.297a3 3 0 0 1 1.311 1.31c.193.379.265.772.297 1.168.03.374.03.83.03 1.356V19c0 .46-.003.86-.03 1.195-.032.396-.104.789-.297 1.167a3 3 0 0 1-1.31 1.31c-.379.194-.772.265-1.168.298-.374.03-.83.03-1.356.03h-8.08c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.144-1.565-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564-.055-.668-.044-1.34-.044-2.01V6.758c0-.805 0-1.47.044-2.011.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C7.29 1 7.954 1 8.758 1zM7 17a2 2 0 0 0-1.983 1.74c-.067.511.022.817.2 1.168a2 2 0 0 0 .875.874c.156.08.38.145.82.18C7.361 21 7.943 21 8.8 21h8c.576 0 .949 0 1.232-.023.272-.023.373-.061.422-.086a1 1 0 0 0 .437-.437c.025-.05.063-.15.085-.422C19.058 19.03 19 18.005 19 17zm5.957-11.207a1 1 0 0 0-1.338-.068l-.076.068-3 3a1 1 0 1 0 1.414 1.414l1.293-1.293V12.5a1 1 0 0 0 2 0V8.914l1.293 1.293.076.068a1 1 0 0 0 1.407-1.406l-.069-.076z" clipRule="evenodd" /></svg>`;
	}
}

customElements.define('icon-releasesfilled', ReleasesFilled);
export default ReleasesFilled;
