class Token extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20.5 7.278-5.006 2.781M11.996 16 12 21.502M11.995 16a4 4 0 0 0 3.5-5.94m-3.5 5.94A4 4 0 0 1 8.5 10.056M3.5 7.278l4.999 2.778m6.995.003A4 4 0 0 0 11.996 8c-1.504 0-2.814.83-3.497 2.057M21 16.059V7.942c0-.343 0-.514-.05-.667a1 1 0 0 0-.215-.364c-.109-.118-.258-.201-.558-.368l-7.4-4.11c-.284-.158-.425-.237-.575-.268a1 1 0 0 0-.403 0c-.15.03-.292.11-.576.267l-7.4 4.111c-.3.167-.45.25-.558.368a1 1 0 0 0-.215.364C3 7.428 3 7.6 3 7.942v8.117c0 .343 0 .514.05.667a1 1 0 0 0 .215.364c.109.118.258.201.558.368l7.4 4.11c.284.158.425.237.576.268.133.027.27.027.402 0 .15-.03.292-.11.576-.267l7.4-4.111c.3-.167.45-.25.558-.368a1 1 0 0 0 .215-.364c.05-.153.05-.324.05-.667" /></svg>`;
	}
}

customElements.define('icon-token', Token);
export default Token;
