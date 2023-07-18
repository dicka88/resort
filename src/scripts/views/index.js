import RestaurantSource from '../data/restaurants-source';
import RESTAURANT_IMAGE from '../globals/restaurant-image-endpoint';

const Index = {
  async render() {
    return `
      <!-- hero  -->
      <section class="hero relative">
        <img src="./images/heros/hero-image_2.jpg" width="450" alt="" />
        <div class="absolute text">
          <h1>Resort</h1>
          <p>Discover your best restaurant everywhere</p>
        </div>
      </section>

      <section class="categories">
        <div class="container">
          <h2>Categories</h2>
          <div class="py-2 gap-4">
            <a href="#">
              <div class="relative category overflow-hidden rounded-md text-center">
                <img src="./category/cafe.png" class="aspect-square" alt="Cafe">
                <div class="absolute bottom-0 w-full text-white p-2 description">
                  <p>Cafe</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="relative category overflow-hidden rounded-md text-center">
                <img src="./category/fast-food.png" class="aspect-square" alt="Fast Food">
                <div class="absolute bottom-0 w-full text-white p-2 description">
                  <p>Fast Food</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="relative category overflow-hidden rounded-md text-center">
                <img src="./category/fine-dining.png" class="aspect-square" alt="Fine Dining">
                <div class="absolute bottom-0 w-full text-white p-2 description">
                  <p>Fine Dining</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="relative category overflow-hidden rounded-md text-center">
                <img src="./category/japanese.png" class="aspect-square" alt="Japanese">
                <div class="absolute bottom-0 w-full text-white p-2 description">
                  <p>Japanese</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="relative category overflow-hidden rounded-md text-center">
                <img src="./category/middle-eastern.png" class="aspect-square" alt="Middle Eastern">
                <div class="absolute bottom-0 w-full text-white p-2 description">
                  <p>Middle Eastern</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="relative category overflow-hidden rounded-md text-center">
                <img src="./category/padang.png" class="aspect-square" alt="Padang">
                <div class="absolute bottom-0 w-full text-white p-2 description">
                  <p>Padang</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="relative category overflow-hidden rounded-md text-center">
                <img src="./category/sea-food.png" class="aspect-square" alt="Sea Food">
                <div class="absolute bottom-0 w-full text-white p-2 description">
                  <p>Sea Food</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="relative category overflow-hidden rounded-md text-center">
                <img src="./category/others.png" class="aspect-square" alt="">
                <div class="absolute bottom-0 w-full text-white p-2 description">
                  <p>Others</p>
                </div>
              </div>
            </a>
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
            <a href="#">
              <div class="p-2 border rounded-md flex items-center justify-center"
                style="background-image: url(./city/jakarta.png);">
                Jakarta
              </div>
            </a>
            <a href="#">
              <div class="p-2 border rounded-md flex items-center justify-center"
                style="background-image: url(./city/bandung.png);">
                Bandung
              </div>
            </a>
            <a href="#">
              <div class="p-2 border rounded-md flex items-center justify-center"
                style="background-image: url(./city/semarang.png);">
                Semarang
              </div>
            </a>
            <a href="#">
              <div class="p-2 border rounded-md flex items-center justify-center"
                style="background-image: url(./city/yogyakarta.png);">
                Yogyakarta
              </div>
            </a>
            <a href="#">
              <div class="p-2 border rounded-md flex items-center justify-center"
                style="background-image: url(./city/surabaya.png);">
                Surabaya
              </div>
            </a>
            <a href="#">
              <div class="p-2 border rounded-md flex items-center justify-center"
                style="background-image: url(./city/others.png);">
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
        src="${RESTAURANT_IMAGE.medium(item.pictureId)}"
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
