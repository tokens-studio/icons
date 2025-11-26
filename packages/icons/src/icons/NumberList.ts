class NumberList extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12H10m11-6H10m11 12H10m-7-3h1.5q.25-.018.5 0a1.22 1.22 0 0 1 1 1 3.4 3.4 0 0 1 0 .53q.017.235 0 .47a1.22 1.22 0 0 1-1 1 3.4 3.4 0 0 1-.53 0A3 3 0 0 0 4 18a1.22 1.22 0 0 0-1 1 3.4 3.4 0 0 0 0 .53v.9c0 .28 0 .42.09.51s.23.09.51.09H6M3 3h1.2a.29.29 0 0 1 .3.3V9m0 0H3m1.5 0H6" /></svg>`;
	}
}

customElements.define('icon-numberlist', NumberList);
export default NumberList;
