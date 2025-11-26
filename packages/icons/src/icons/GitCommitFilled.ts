class GitCommitFilled extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" fillRule="evenodd" d="M16.9 11a5.002 5.002 0 0 0-9.8 0H2a1 1 0 1 0 0 2h5.1a5.002 5.002 0 0 0 9.8 0H22a1 1 0 1 0 0-2z" clipRule="evenodd" /></svg>`;
	}
}

customElements.define('icon-gitcommitfilled', GitCommitFilled);
export default GitCommitFilled;
