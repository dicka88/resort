class NotFound404 extends HTMLElement {
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

customElements.define('not-found-404', NotFound404);
