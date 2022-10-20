class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <p class="detail-footer">Makassar City, South Sulawesi, Indonesia | Phone : 0822-3069-3794 | Email : F208Y0418@dicoding.org</p>
            <p>Copyright &copy; 2022 - Zero Resto</p>
        `;
  }
}

customElements.define('footer-bar', FooterBar);
