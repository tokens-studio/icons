class SwatchBookFilled extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" fillRule="evenodd" d="M9.297 2.015A3 3 0 0 1 12 5v.587l.592-.592.122-.116a3.4 3.4 0 0 1 4.697.12l1.883 1.88.12.122a3.4 3.4 0 0 1-.08 4.738l.001.001-.263.263A3 3 0 0 1 22 15v4a3 3 0 0 1-2.703 2.984l-.297.016L7 22a5 5 0 0 1-5-5V5a3 3 0 0 1 3-3h4zM11.114 20H19l.1-.005a1 1 0 0 0 .9-.994v-4a1 1 0 0 0-1-1h-1.914zM7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8.002-10.005a1.4 1.4 0 0 0-.993.412L12 8.416v7.857l5.918-5.944.005-.004.094-.103a1.4 1.4 0 0 0 .206-1.445 1.4 1.4 0 0 0-.22-.353l-.096-.103-.013-.012-1.9-1.9a1.4 1.4 0 0 0-.992-.414" clipRule="evenodd" /></svg>`;
	}
}

customElements.define('icon-swatchbookfilled', SwatchBookFilled);
export default SwatchBookFilled;
