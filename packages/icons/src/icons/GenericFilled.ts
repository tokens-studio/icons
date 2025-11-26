class GenericFilled extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M12.17 1.646a1.7 1.7 0 0 1 .424.095l.2.088.187.113q.18.125.323.29l.131.177.012.017 3.696 5.934c.142.215.234.459.268.714l.01.115.005.116A1.7 1.7 0 0 1 15.73 11H8.3a1.7 1.7 0 0 1-1.738-1.74l.007-.118a1.7 1.7 0 0 1 .205-.664l.06-.1 3.72-5.912v.002c.141-.235.336-.434.57-.578l.193-.102c.2-.09.415-.14.634-.148zM22 17.5a4.5 4.5 0 1 1-9-.001 4.5 4.5 0 0 1 9 0M11 20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2z" /></svg>`;
	}
}

customElements.define('icon-genericfilled', GenericFilled);
export default GenericFilled;
