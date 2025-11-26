class GitBranch02Filled extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" fillRule="evenodd" d="M7 3a1 1 0 0 0-2 0v11.126A4.002 4.002 0 0 0 6 22a4 4 0 0 0 3.884-3.04 10 10 0 0 0 9.077-9.076A4.002 4.002 0 0 0 18 2a4 4 0 0 0-1.047 7.862 8 8 0 0 1-7.091 7.091A4.01 4.01 0 0 0 7 14.126z" clipRule="evenodd" /></svg>`;
  }
}

customElements.define("icon-gitbranch02filled", GitBranch02Filled);
export default GitBranch02Filled;
