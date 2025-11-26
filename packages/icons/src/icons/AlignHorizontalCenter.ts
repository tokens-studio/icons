class AlignHorizontalCenter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21V3" opacity= /><path stroke="currentColor" stroke-width="2" d="M4.25 15.75v.5c0 .414.336.75.75.75h14a.75.75 0 0 0 .75-.75v-.5m-15.5 0v-.5A.75.75 0 0 1 5 14.5h14a.75.75 0 0 1 .75.75v.5m-15.5 0h15.5m-11.5-7.5v.5c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-.5m-7.5 0v-.5A.75.75 0 0 1 9 7h6a.75.75 0 0 1 .75.75v.5m-7.5 0h7.5" /></svg>`;
	}
}

customElements.define('icon-alignhorizontalcenter', AlignHorizontalCenter);
export default AlignHorizontalCenter;
