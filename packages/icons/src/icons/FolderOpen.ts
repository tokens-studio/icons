class FolderOpen extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 10.5v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 6.5 16.92 6.5 15.8 6.5h-2.972l-.944-1.731c-.32-.642-.481-.963-.72-1.198a2 2 0 0 0-.748-.462C10.1 3 9.74 3 9.022 3H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 4.52 2 5.08 2 6.2v10c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 21 5.12 21 6.8 21h10.04c1.13 0 1.694 0 2.162-.198a2.5 2.5 0 0 0 1.036-.82c.302-.409.432-.957.694-2.055l1.064-4.471c.24-1.009.36-1.513.235-1.91a1.5 1.5 0 0 0-.657-.832c-.357-.214-.875-.214-1.912-.214H7.81c-.649 0-.973 0-1.246.111a1.5 1.5 0 0 0-.612.462c-.182.232-.271.544-.45 1.168l-2.144 7.507" /></svg>`;
  }
}

customElements.define("icon-folderopen", FolderOpen);
export default FolderOpen;
