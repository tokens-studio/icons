class CaseTitle extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M4.5 12a1 1 0 0 0 0 2v-2m6 2a1 1 0 1 0 0-2v2M6.772 7.602l-.91-.414zM1.59 16.586a1 1 0 0 0 1.82.828L2.5 17zm6.638-8.984.91-.414zm3.362 9.812a1 1 0 0 0 1.82-.828L12.5 17zM7.28 6.76l-.443-.897zm.44 0 .443-.897zM16.5 8a1 1 0 1 0-2 0h2m-2 9a1 1 0 1 0 2 0h-2m-10-4v1h6v-2h-6zm2.272-5.398-.91-.414-4.272 9.398.91.414.91.414 4.272-9.398zm1.456 0-.91.414 4.272 9.398.91-.414.91-.414L9.14 7.188zm-1.456 0 .91.414.147-.32c.042-.089.071-.145.093-.182.022-.04.022-.033 0-.008a.6.6 0 0 1-.201.15l-.442-.896-.442-.897c-.367.18-.56.498-.654.663-.106.186-.214.426-.322.662zm1.456 0 .91-.414c-.107-.236-.215-.476-.32-.662-.094-.165-.288-.482-.655-.663l-.442.897-.442.897a.6.6 0 0 1-.201-.15c-.022-.026-.022-.033 0 .007.022.037.05.093.093.182l.147.32zM7.28 6.76l.442.897a.5.5 0 0 1-.442 0l.442-.897.442-.897a1.5 1.5 0 0 0-1.326 0zM21.5 14h-1a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4zm-3 3v-1a2 2 0 0 1-2-2h-2a4 4 0 0 0 4 4zm-3-3h1a2 2 0 0 1 2-2v-2a4 4 0 0 0-4 4zm3-3v1a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4zm-3-3h-1v9h2V8z" /></svg>`;
	}
}

customElements.define('icon-casetitle', CaseTitle);
export default CaseTitle;
