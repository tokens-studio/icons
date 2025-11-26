class PreviewFilled extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /><path fill="currentColor" fillRule="evenodd" d="M16.241 2c.805 0 1.47 0 2.011.044.562.046 1.08.144 1.564.392a4 4 0 0 1 1.749 1.748c.247.485.345 1.002.391 1.564C22 6.29 22 6.954 22 7.758v8.483c0 .805 0 1.47-.044 2.011-.046.562-.144 1.08-.392 1.564a4 4 0 0 1-1.748 1.749c-.485.247-1.002.345-1.564.391-.541.044-1.206.044-2.01.044H7.758c-.805 0-1.47 0-2.011-.044-.562-.046-1.08-.144-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564C2 17.711 2 17.046 2 16.242V7.758c0-.805 0-1.47.044-2.011.046-.562.144-1.08.392-1.564a4 4 0 0 1 1.748-1.748c.485-.248 1.002-.346 1.564-.392C6.29 2 6.954 2 7.758 2zM12 7.004a7.5 7.5 0 0 0-6.944 4.666 1 1 0 0 0 0 .66 7.503 7.503 0 0 0 11.127 3.392 7.5 7.5 0 0 0 2.761-3.392 1 1 0 0 0 0-.66A7.5 7.5 0 0 0 12 7.004" clipRule="evenodd" /></svg>`;
	}
}

customElements.define('icon-previewfilled', PreviewFilled);
export default PreviewFilled;
