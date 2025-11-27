class UnplugFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M21.293 1.293a1 1 0 1 1 1.414 1.414L20.414 5l.592.592.116.121a3.4 3.4 0 0 1-.116 4.693l-2.299 2.301a1 1 0 0 1-1.34.066l-.074-.066-6-6a1 1 0 0 1 0-1.414l2.3-2.3a3.4 3.4 0 0 1 4.814 0l.593.593zM9.293 10.293a1 1 0 1 1 1.414 1.414L8.914 13.5l1.586 1.586 1.793-1.793a1 1 0 1 1 1.414 1.414L11.914 16.5l.793.793.066.073a1 1 0 0 1-.066 1.341l-2.3 2.3a3.4 3.4 0 0 1-4.814 0L5 20.414l-2.293 2.293a1 1 0 1 1-1.414-1.414L3.586 19l-.592-.594a3.4 3.4 0 0 1-.996-2.238L1.994 16a3.4 3.4 0 0 1 1-2.408l2.3-2.299.072-.066a1 1 0 0 1 1.341.066l.793.793z" /></svg>`;
	}
}

customElements.define('icon-unplugfilled', UnplugFilled);
export default UnplugFilled;
