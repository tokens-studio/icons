class PhoneFilled extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" fillRule="evenodd" d="M16.056 21.88a20.04 20.04 0 0 1-8.718-5.128A20.04 20.04 0 0 1 2.21 8.034l-.016-.056c-.148-.519-.262-.921-.264-1.473a4.4 4.4 0 0 1 .513-1.971c.53-.946 1.672-2.158 2.657-2.656a3 3 0 0 1 2.708 0c.842.426 1.78 1.38 2.303 2.183a3 3 0 0 1 0 3.27c-.173.267-.42.514-.707.8-.089.09-.187.154-.122.29a13.6 13.6 0 0 0 2.652 3.735 13.6 13.6 0 0 0 3.736 2.652c.14.068.196-.029.29-.122.285-.287.532-.534.798-.707a3 3 0 0 1 3.27 0c.784.509 1.762 1.467 2.185 2.303a3 3 0 0 1 0 2.708c-.499.985-1.71 2.126-2.657 2.658-.55.308-1.34.514-1.97.512-.552-.002-.955-.116-1.474-.264z" clipRule="evenodd" /></svg>`;
	}
}

customElements.define('icon-phonefilled', PhoneFilled);
export default PhoneFilled;
