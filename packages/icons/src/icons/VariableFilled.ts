class VariableFilled extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" fillRule="evenodd" d="m12.202 1.154.201.031.124.03c.285.082.537.232.736.342l7.4 4.111.192.108c.204.115.433.258.616.457l.135.164q.128.172.215.366l.078.198.037.13c.052.215.062.435.064.63v8.558a2.8 2.8 0 0 1-.064.63l-.037.13a2 2 0 0 1-.293.564l-.135.164a2.5 2.5 0 0 1-.616.457l-.192.107-7.4 4.112c-.199.11-.45.26-.736.342l-.124.03c-.199.04-.404.052-.605.031l-.201-.031a2 2 0 0 1-.471-.165l-.389-.207-7.4-4.112c-.21-.116-.484-.258-.713-.47l-.095-.094a2 2 0 0 1-.35-.53L2.1 17.04A2.5 2.5 0 0 1 2 16.279V7.72a2.5 2.5 0 0 1 .1-.76l.079-.198c.088-.193.206-.373.35-.53l.095-.095c.229-.21.504-.353.713-.47l7.4-4.11.389-.208c.145-.069.303-.13.47-.165l.202-.031a2 2 0 0 1 .404 0M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" /></svg>`;
	}
}

customElements.define('icon-variablefilled', VariableFilled);
export default VariableFilled;
