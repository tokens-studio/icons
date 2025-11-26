class ConfigurationFilled extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M2 13.064c0-.19.204-.311.37-.22l8.371 4.602a.5.5 0 0 1 .259.439v4.281a.25.25 0 0 1-.371.219l-7.806-4.337A1.6 1.6 0 0 1 2 16.649zM21.63 12.844a.25.25 0 0 1 .37.22v3.585c0 .581-.315 1.117-.822 1.399l-7.807 4.337a.25.25 0 0 1-.371-.219v-4.28a.5.5 0 0 1 .259-.439zM20.65 10.664a.25.25 0 0 1-.002.438l-8.406 4.623a.5.5 0 0 1-.482 0l-8.41-4.623a.25.25 0 0 1-.001-.438l5.65-3.14V9a3 3 0 0 0 3 3l.154-.004A3 3 0 0 0 15 9V7.524z" /><path fill="currentColor" d="M10.999 9V4.414l-.793.793a1 1 0 1 1-1.414-1.415l2.5-2.5.073-.066a1 1 0 0 1 1.34.066l2.5 2.5.07.077a1 1 0 0 1-1.407 1.406l-.076-.068-.793-.793V9a1 1 0 0 1-2 0" /></svg>`;
  }
}

customElements.define("icon-configurationfilled", ConfigurationFilled);
export default ConfigurationFilled;
