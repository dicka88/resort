import CategorySource from '../data/categories-source';
import RestaurantSource from '../data/restaurants-source';

const Index = {
  async render() {
    const categories = CategorySource.getCategories();

    return `
      <!-- hero  -->
      <section class="hero relative">
        <div class="hero__wrapper">
          <picture>
            <source media="(max-width: 480px)" type="image/webp" srcset="./images/heros/hero-image_2-small.webp" />
            <source media="(max-width: 768px)" type="image/webp" srcset="./images/heros/hero-image_2-medium.webp" />
            <source media="(max-width: 1920px)" type="image/webp" srcset="./images/heros/hero-image_2.webp" />
            <source media="(max-width: 480px)" type="image/jpg" srcset="./images/heros/hero-image_2-small.jpg" />
            <source media="(max-width: 768px)" type="image/jpg" srcset="./images/heros/hero-image_2-medium.jpg" />
            <img src="./images/heros/hero-image_2.jpg" alt="" />
          </picture>
        </div>
        <div class="absolute text">
          <h1>Resort</h1>
          <p>Discover your best restaurant everywhere</p>
        </div>
      </section>

      <section class="categories">
        <div class="container">
          <h2>Categories</h2>
          <div class="py-2 gap-4">
            ${categories.map((category) => `
              <category-item
                href="${category.href}"
                name="${category.name}"
                src="${category.src}"
              ></category-item>
            `).join('')}
          </div>
        </div>
      </section>

      <section id="restaurants" class="restaurant">
        <div class="container">
          <!-- restaurant list  -->
          <h2>Popular Restaurants</h3>
            <div class="restaurant-lists" id="restaurant-lists">
              <!-- content filled by js  -->
            </div>
        </div>
      </section>

      <section class="restaurant-city">
        <div class="container">
          <h2>City</h3>
          <div class="grid grid-cols-2 gap-2">
            <a href="#" class="rounded-md" style="background: #e8e8e8;">
              <div class="p-2 border rounded-md flex items-center justify-center"
                style="background-image: url(./images/city/jakarta.webp);">
                Jakarta
              </div>
            </a>
            <a href="#" class="rounded-md" style="background: #e8e8e8;">
              <div class="p-2 border rounded-md flex items-center justify-center"
                style="background-image: url(./images/city/bandung.webp);">
                Bandung
              </div>
            </a>
            <a href="#" class="rounded-md" style="background: #e8e8e8;">
              <div class="p-2 border rounded-md flex items-center justify-center"
                style="background-image: url(./images/city/semarang.webp);">
                Semarang
              </div>
            </a>
            <a href="#" class="rounded-md" style="background: #e8e8e8;">
              <div class="p-2 border rounded-md flex items-center justify-center"
                style="background-image: url(./images/city/yogyakarta.webp);">
                Yogyakarta
              </div>
            </a>
            <a href="#" class="rounded-md" style="background: #e8e8e8;">
              <div class="p-2 border rounded-md flex items-center justify-center"
                style="background-image: url(./images/city/surabaya.webp);">
                Surabaya
              </div>
            </a>
            <a href="#" class="rounded-md" style="background: #e8e8e8;">
              <div class="p-2 border rounded-md flex items-center justify-center"
                style="background-image: url(./images/city/others.webp);">
                Others
              </div>
            </a>
          </div>
        </div>
      </section>

      <section class="promos">
        <div class="container pb-3 flex gap-2">
          <div class="p-4 rounded-md w-full promo1">
            <h2 class="py-0">Promos</h3>
              <div class="py-4">
                <p>Claim your promo below</p>
                <button class="btn secondary">Find out</button>
              </div>
          </div>
          <div class="p-4 rounded-md w-full promo2 relative">
            <h2 class="py-0">Cashback Reservation</h3>
              <div class="py-4">
                <p>Get extra discount up to 15%</p>
                <button class="btn secondary">Claim now</button>
              </div>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const $restaurantLists = document.querySelector('#restaurant-lists');
    $restaurantLists.innerHTML = Array.from({ length: 8 }).map(() => `
        <div class="restaurant-item">
          <div class="relative">
            <div class="skeleton" style="height: 150px;"></div>
          </div>
          <div class="p-3 description">
            <div class="skeleton mb-2" style="height: 20px; width: 40%;"></div>
            <div class="skeleton skeleton-text mb-2"></div>
            <div class="skeleton skeleton-text"></div>
          </div>
        </div>
    `).join('');

    const restaurants = await RestaurantSource.getRestaurantList();

    const restaurantHTML = restaurants.restaurants.map((item) => `
      <restaurant-item
        id="${item.id}"
        pictureId="${item.pictureId}"
        name="${item.name}"
        city="${item.city}"
        rating="${item.rating}"
        description="${item.description}"
      ></restaurant-item>
    `);

    $restaurantLists.innerHTML = restaurantHTML.join('');
  },
};

export default Index;
