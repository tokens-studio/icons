class GitCommit extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 0 1-8 0m8 0a4 4 0 0 0-8 0m8 0h6M8 12H2" /></svg>`;
  }
}

customElements.define("icon-gitcommit", GitCommit);
export default GitCommit;
