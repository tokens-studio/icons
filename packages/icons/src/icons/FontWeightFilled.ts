class FontWeightFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M12.492 14.5h-.984L12 13.447z" /><path fill="currentColor" fillRule="evenodd" d="M12 1a4 4 0 0 1 3.121 6.5h2.362l.206.01a2.5 2.5 0 0 1 2.135 1.668l.06.197.009.041 1.522 8.946a2.498 2.498 0 0 1-2.27 3.134L19 21.5H4.99a2.5 2.5 0 0 1-2.38-3.099L4.101 9.38l.011-.054.063-.192A2.5 2.5 0 0 1 6.494 7.5H8.88A4 4 0 0 1 12 1m.428 9.572a1.3 1.3 0 0 0-.856 0l-.136.056c-.334.16-.503.437-.568.549a3 3 0 0 0-.111.21l-.1.21-2.563 5.48a1 1 0 0 0 1.812.847l.666-1.424h2.856l.666 1.424.049.09a1 1 0 0 0 1.801-.843l-.038-.095-2.563-5.478c-.061-.13-.136-.292-.211-.421a1.4 1.4 0 0 0-.45-.484l-.117-.065zM12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" /></svg>`;
	}
}

customElements.define('icon-fontweightfilled', FontWeightFilled);
export default FontWeightFilled;
