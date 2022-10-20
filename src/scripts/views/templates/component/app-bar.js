class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="app-bar__menu">
        <button aria-label="hamburger button" id="hamburgerButton">☰</button>
    </div>
    <div class="app-bar__brand">
        <div class="firstName">ZERO</div>
        <div class="lastName">RESTO</div>
    </div>
    <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#/like">Favorite</a></li>
            <li><a href="https://github.com/nilammgfra22">About Us</a></li>
        </ul>
    </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
