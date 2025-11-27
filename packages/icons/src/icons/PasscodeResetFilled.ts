class PasscodeResetFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M18.5 13a4.5 4.5 0 1 1-3.45 7.39 1 1 0 0 1 .77-1.64 1 1 0 0 1 .76.36 2.53 2.53 0 0 0 3.074.617 2.499 2.499 0 1 0-2.714-4.167 1 1 0 0 1-.34 1.94h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1.93-.37 4.5 4.5 0 0 1 3-1.13m-6.4 1.72A2.78 2.78 0 0 1 14.88 12c.323.002.644.056.95.16A6 6 0 0 1 23 13.49a2.6 2.6 0 0 0 0-.49V7a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8.1zm4.9-6A1.25 1.25 0 1 1 15.75 10 1.25 1.25 0 0 1 17 8.75zM7 11.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M10.75 10a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0" /></svg>`;
	}
}

customElements.define('icon-passcoderesetfilled', PasscodeResetFilled);
export default PasscodeResetFilled;
