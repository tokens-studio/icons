class DiskMarkerFilled extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5" /></svg>`;
  }
}

customElements.define("icon-diskmarkerfilled", DiskMarkerFilled);
export default DiskMarkerFilled;
