class TypingFilled extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M3 13a1 1 0 0 1 1 1v1l.01.197A2 2 0 0 0 6 17h.586l-1.293-1.293-.068-.076a1 1 0 0 1 1.406-1.406l.076.068 3 3 .068.076a1 1 0 0 1 0 1.262l-.068.076-3 3a1 1 0 1 1-1.414-1.414L6.586 19H6a4 4 0 0 1-3.995-3.802L2 15v-1a1 1 0 0 1 1-1" /><path fill="currentColor" fillRule="evenodd" d="M14 14a3 3 0 0 1 3 3v2a3 3 0 1 1-6 0v-2a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1" clipRule="evenodd" /><path fill="currentColor" d="M20.603 14.005A1 1 0 0 1 21.5 15v5h.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h.5v-4h-1a1 1 0 1 1 0-2h2zM9 2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM14.297 2.015A3 3 0 0 1 17 5v4a3 3 0 0 1-3 3 1 1 0 1 1 0-2 1 1 0 0 0 1-1V5a1 1 0 0 0-.901-.995L14 4l-.102-.005A1 1 0 0 1 14 2zM19.297 2.015A3 3 0 0 1 22 5v4a3 3 0 0 1-3 3 1 1 0 1 1 0-2 1 1 0 0 0 1-1V5a1 1 0 0 0-.901-.995L19 4l-.102-.005A1 1 0 0 1 19 2z" /></svg>`;
	}
}

customElements.define('icon-typingfilled', TypingFilled);
export default TypingFilled;
