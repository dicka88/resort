class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="app-bar">
        <div class="container flex">
          <div>
            <a href="/" class="logo">
              <img src="/logo-white.svg" alt="Resort" />
              Resort
            </a>
          </div>
          <div class="nav-menu">
            <a href="/">Home</a>
            <a href="/#/favorite">Favorite</a>
            <a href="https://dickaismaji.com">About Us</a>
          </div>
          <div class="btn-menu-wrapper">
            <button class="btn-menu" id="btn-menu" aria-label="Show the menus">
              ≡
            </button>
          </div>
        </div>
        <nav>
          <div class="auth">
            <a href="#/signin" class="btn primary"> Signin </a>
            <a href="#/signup" class="btn secondary"> Signup </a>
          </div>
          <div class="container">
            <a href="/#">Home</a>
            <a href="/#/favorite">Favorite</a>
            <a href="https://dickaismaji.com">About Us</a>
          </div>
        </nav>
      </header>
    `;

    this.$btnMenu = this.querySelector('#btn-menu');
    this.$nav = this.querySelector('nav');
    this.$appBar = this.querySelector('.app-bar');
    this.$navLinks = this.querySelectorAll('nav a');

    // button menu click
    this.$btnMenu.addEventListener('click', this.toggleNavMenu.bind(this));
    this.$navLinks.forEach((link) => {
      link.addEventListener('click', this.toggleNavMenu.bind(this));
    });

    // window scroll
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  toggleNavMenu() {
    if (this.$nav.classList.contains('open')) {
      this.$btnMenu.textContent = '≡';
    } else {
      this.$btnMenu.textContent = '×';
    }

    // open/close the menu
    this.$nav.classList.toggle('open');
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

customElements.define('my-header', MyHeader);
