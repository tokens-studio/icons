class FolderOpenFilled extends HTMLElement {
	connectedCallback() {
		this.style.display = this.style.display || 'inline-block';
		this.style.width = this.style.width || '16px';
		this.style.height = this.style.height || '16px';
		this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path fill="currentColor" d="M9.491 2c.454.005.866.031 1.251.164.42.145.804.382 1.121.692.388.38.628.888.916 1.465l.34.679H17.4c.264 0 .522-.001.739.017.228.018.498.063.77.2.328.169.604.424.796.737l.077.138.087.203c.072.2.1.395.114.566.018.217.017.475.017.739V8H6a1 1 0 0 0 0 2h14v.003c.273.003.521.009.738.028.369.033.766.107 1.136.331.523.317.913.815 1.094 1.4.127.413.102.817.045 1.182-.057.358-.166.79-.288 1.28l-.998 3.989c-.248.993-.425 1.78-.877 2.385a3.5 3.5 0 0 1-1.447 1.129c-.695.292-1.502.273-2.526.273H6c-.683 0-1.257.001-1.724-.037a5 5 0 0 1-.528-.068 3 3 0 0 1-.837-.276 3.5 3.5 0 0 1-1.53-1.53c-.219-.432-.305-.887-.344-1.365C1 18.257 1 17.684 1 17V6l.001-.02c0-.45.002-.845.03-1.175.032-.395.104-.79.296-1.167a3 3 0 0 1 1.31-1.31c.379-.194.773-.265 1.168-.298C4.188 2 4.657 2 5.2 2z" /></svg>`;
	}
}

customElements.define('icon-folderopenfilled', FolderOpenFilled);
export default FolderOpenFilled;
