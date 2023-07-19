const { default: RESTAURANT_IMAGE } = require("../globals/restaurant-image-endpoint");

class RestaurantItem extends HTMLElement {
  static get tag() {
    return 'restaurant-item'
  }

  constructor() {
    super();

    this.id = this.getAttribute('id');
    this.name = this.getAttribute('name');
    this.pictureId = this.getAttribute('pictureId');
    this.city = this.getAttribute('city');
    this.rating = this.getAttribute('rating');
    this.description = this.getAttribute('description');
  }

  connectedCallback() {
    const template = `
      <div class="restaurant-item">
        <div class="relative">
          <div class="restaurant-item__thumbnail">
            <picture>
              <source media="(max-width: 480px)" type="image/jpg" data-rcset="${RESTAURANT_IMAGE.small(this.pictureId)}" />
              <source media="(max-width: 768px)" type="image/jpg" data-srcset="${RESTAURANT_IMAGE.medium(this.pictureId)}" />
              <img
                class="lazyload"
                data-src="${RESTAURANT_IMAGE.large(this.pictureId)}"
                alt="${this.name}"
              />
            </picture>
          </div>
          <div class="absolute bottom-0 text-white w-full">
            <div class="flex space-between w-full p-3 rating">
              <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                ${this.city}
              </div>
              <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#f7cb3c" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                ${this.rating}
              </div>
            </div>
          </div>
        </div>
        <div class="p-3 description">
          <a href="/#/detail/${this.id}">${this.name}</a>
          <p>${this.description.substring(0, 100)}...</p>
        </div>
      </div>
    `;

    this.innerHTML = template;
  }
}

customElements.define(RestaurantItem.tag, RestaurantItem);
