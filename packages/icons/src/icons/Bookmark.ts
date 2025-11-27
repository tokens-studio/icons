class Bookmark extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C7.28 3 8.12 3 9.8 3h4.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C19 5.28 19 6.12 19 7.8V21l-7-4-7 4z" /></svg>`;
	}
}

customElements.define('icon-bookmark', Bookmark);
export default Bookmark;
