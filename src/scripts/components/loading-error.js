class LoadingError extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="flex justify-center error py-10 loading-error">
        <div class="text-center">
          <img src="/images/broken-robot.svg" alt="Broken" class="mb-4 loading-error__illustration" />
          <a href="/#" class="btn primary">Go Back to Homepage</a>
        </div>
      </div>
    `;
  }
}

customElements.define('loading-error', LoadingError);
