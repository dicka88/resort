class CategoryItem extends HTMLElement {
  static get tag() {
    return 'category-item';
  }

  constructor() {
    super();

    this.href = this.getAttribute('href');
    this.src = this.getAttribute('src');
    this.name = this.getAttribute('name');
  }

  connectedCallback() {
    const template = `
      <a href="${this.href}">
        <div class="relative category overflow-hidden rounded-md text-center">
          <img src="${this.src}" class="aspect-square" alt="${this.name}">
          <div class="absolute bottom-0 w-full text-white p-2 description">
            <p>${this.name}</p>
          </div>
        </div>
      </a>
    `;

    this.innerHTML = template;
  }
}

customElements.define(CategoryItem.tag, CategoryItem);
