class NoResultFound extends HTMLElement {
  constructor() {
    super();

    this.text = this.getAttribute('text') || 'No Result Found';
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="flex justify-center no-result-found">
        <div class="text-center">
          <img src="/images/no-data.svg" alt="No Found" class="no-result-found__illustration" />
          <p>${this.text}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('no-result-found', NoResultFound);
