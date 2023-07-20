class NotFound404 extends HTMLElement {
  static get tag() {
    return 'not-found-404';
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="flex justify-center error py-10 loading-error">
        <div class="text-center">
          <img src="/images/404.svg" alt="Broken" class="mb-4 loading-error__illustration" />
          <a href="/#" class="btn primary">Go Back to Homepage</a>
        </div>
      </div>
    `;
  }
}

customElements.define(NotFound404.tag, NotFound404);
