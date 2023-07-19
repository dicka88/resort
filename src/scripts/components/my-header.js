class MyHeader extends HTMLElement {
  static get tag() {
    return 'my-header'
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="app-bar">
        <div class="container flex">
          <div>
            <a href="/#" class="logo">
              <img src="/logo-white.svg" alt="Resort" />
              Resort
            </a>
          </div>
          <nav class="nav-menu">
            <ul>
              <li><a href="/#">Home</a></li>
              <li><a href="/#/favorite">Favorite</a></li>
              <li><a href="https://dickaismaji.com" target="_blank">About Us</a></li>
            </ul>
          </nav>
          <div class="btn-menu-wrapper">
            <button class="btn-menu-toggle" id="btn-menu-toggle" aria-label="Show the menus">
              ≡
            </button>
          </div>
        </div>
        <nav id="drawer">
          <div class="auth">
            <a href="#/signin" class="btn primary"> Signin </a>
            <a href="#/signup" class="btn secondary"> Signup </a>
          </div>
          <div class="container">
            <a href="/#">Home</a>
            <a href="/#/favorite">Favorite</a>
            <a href="https://dickaismaji.com" target="_blank">About Us</a>
          </div>
        </nav>
      </header>
    `;

    this.$btnMenuToggle = this.querySelector('#btn-menu-toggle');
    this.$drawer = this.querySelector('#drawer');
    this.$appBar = this.querySelector('.app-bar');
    this.$navLinks = this.querySelectorAll('#drawer a');

    // button menu click
    this.$btnMenuToggle.addEventListener('click', this.toggleNavMenu.bind(this));
    this.$navLinks.forEach((link) => {
      link.addEventListener('click', this.toggleNavMenu.bind(this));
    });

    // window scroll
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  toggleNavMenu() {
    if (this.$drawer.classList.contains('open')) {
      this.$btnMenuToggle.textContent = '≡';
    } else {
      this.$btnMenuToggle.textContent = '×';
    }

    // open/close the menu
    this.$drawer.classList.toggle('open');
  }

  onWindowScroll() {
    const { scrollY } = window;

    if (scrollY > 120) {
      this.$appBar.classList.add('scrolled');
    } else {
      this.$appBar.classList.remove('scrolled');
    }
  }
}

customElements.define(MyHeader.tag, MyHeader);
