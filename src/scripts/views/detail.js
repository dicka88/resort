import RestaurantSource from '../data/restaurants-source';
import UrlParser from '../routes/url-parser';
import { generateDetailTemplate } from '../template/detail.template';

const Detail = {
  async render() {
    return `
      <section style="margin-top: 120px;">
        <div class="container" id="detail">
          <div class="">
            <div class="my-4">
              <a href="/#/">
                <svg svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11.25a.75.75 0 0 1 0 1.5h-9.25V18a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.28.53v5.25H20Z"/></svg>
                Go Back
              </a>
            </div>
            <div class="relative">
              <div class="skeleton rounded-md" style="height: 250px;"></div>
            </div>
            <div>
              <div class="skeleton rounded-md" style="height: 42px; max-width: 300px; margin: 2em 0;"></div>
              <div class="skeleton rounded-md inline" style="height: 24px; width: 20%; margin: 1em 0;"></div>
              <div class="flex gap-2 mb-2 detail__categories">
                <div class="skeleton rounded-md inline" style="height: 28px; width: 64px;"></div>
                <div class="skeleton rounded-md inline" style="height: 28px; width: 64px;"></div>
              </div>
              <div class="py-4">
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text" style="width: 95%"></div>
                <div class="skeleton skeleton-text" style="width: 98%"></div>
                <div class="skeleton skeleton-text" style="width: 85%"></div>
              </div>
              <div class="grid md:grid-cols-2 gap-12">
                <div class="detail__menus">
                  <h2>Menus</h2>
                  <div class="mb-6">
                    <h3>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 26 26"><g fill="none"><defs><mask id="pepiconsPopKniveForkCircleFilled0"><path fill="#fff" d="M0 0h26v26H0z"/><g fill="#000"><path fill-rule="evenodd" d="M14.27 8.506c0 1.942 1.063 3.308 3 3.994V14a1 1 0 1 0 2 0V4.5a1 1 0 0 0-1.442-.897c-2.316 1.141-3.558 2.799-3.558 4.903Zm2 0c0-.82.319-1.535 1-2.161v3.971c-.695-.411-1-.999-1-1.81Z" clip-rule="evenodd"/><path d="M16.27 20.5v-5a2 2 0 1 1 4 0v5a2 2 0 0 1-4 0ZM6.283 5.45a1 1 0 1 1 1.998.1c-.08 1.603.002 2.682.2 3.158c.095.23.253.315.712.288a1 1 0 1 1 .114 1.997c-1.258.073-2.229-.446-2.674-1.519c-.343-.828-.444-2.142-.35-4.024Z"/><path d="M13.717 5.45a1 1 0 1 0-1.998.1c.08 1.603-.002 2.682-.2 3.158c-.096.23-.253.315-.712.288a1 1 0 1 0-.115 1.997c1.258.073 2.23-.446 2.675-1.519c.343-.828.444-2.142.35-4.024Z"/><path d="M9 5.5a1 1 0 0 1 2 0v9a1 1 0 1 1-2 0v-9Z"/><path d="M8 20.5v-5a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0Z"/></g></mask></defs><circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopKniveForkCircleFilled0)"/></g></svg>
                      Foods
                    </h3>
                    <div>
                      <div class="grid grid-cols-3 gap-4 detail__menu_list">
                        <div class="skeleton rounded-md inline" style="height: 40px;"></div>
                        <div class="skeleton rounded-md inline" style="height: 40px;"></div>
                        <div class="skeleton rounded-md inline" style="height: 40px;"></div>
                        <div class="skeleton rounded-md inline" style="height: 40px;"></div>
                        <div class="skeleton rounded-md inline" style="height: 40px;"></div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6">
                    <h3>
                      <svg svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 26 26"><g fill="none"><defs><mask id="pepiconsPopSoftDrinkCircleFilled0"><path fill="#fff" d="M0 0h26v26H0z"/><g fill="#000"><path fill-rule="evenodd" d="M16.411 7H9.589a2.502 2.502 0 0 0-2.481 2.803l1.22 10A2.5 2.5 0 0 0 10.809 22h4.385a2.5 2.5 0 0 0 2.481-2.198l1.218-10A2.5 2.5 0 0 0 16.41 7ZM9.529 9.004A.5.5 0 0 1 9.589 9h6.822a.5.5 0 0 1 .496.56l-1.217 10a.5.5 0 0 1-.496.44h-4.385a.5.5 0 0 1-.496-.44l-1.22-10a.5.5 0 0 1 .436-.556Z" clip-rule="evenodd"/><path d="M12.217 17.72a.75.75 0 0 1-1.434-.44l4-13a.75.75 0 1 1 1.434.44l-4 13Z"/><path d="M8.5 13.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5h-9Zm6.818-8.022a.75.75 0 0 1 .364-1.456l4 1a.75.75 0 1 1-.364 1.456l-4-1Z"/></g></mask></defs><circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopSoftDrinkCircleFilled0)"/></g></svg>
                      Drinks
                    </h3>
                    <div>
                      <div class="grid grid-cols-3 gap-4 detail__menu_list">
                        <div class="skeleton rounded-md inline" style="height: 40px;"></div>
                        <div class="skeleton rounded-md inline" style="height: 40px;"></div>
                        <div class="skeleton rounded-md inline" style="height: 40px;"></div>
                        <div class="skeleton rounded-md inline" style="height: 40px;"></div>
                        <div class="skeleton rounded-md inline" style="height: 40px;"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2>Customer Reviews</h2>
                  <div class="mb-4">
                    <div class="flex gap-4">
                      <div>
                        <div class="skeleton rounded-full" style="height: 50px; width: 50px"></div>
                      </div>
                      <div class="w-full">
                        <div class="mb-2">
                          <div class="skeleton rounded-md mb-2" style="height: 25px; width: 30%;"></div>
                          <div class="skeleton rounded-md" style="height: 20px; width: 25%;"></div>
                        </div>
                        <div class="skeleton skeleton-text" style="width: 98%"></div>
                        <div class="skeleton skeleton-text" style="width: 70%"></div>
                      </div>
                    </div>
                    <div class="flex gap-4">
                      <div>
                        <div class="skeleton rounded-full" style="height: 50px; width: 50px"></div>
                      </div>
                      <div class="w-full">
                        <div class="mb-2">
                          <div class="skeleton rounded-md mb-2" style="height: 25px; width: 30%;"></div>
                          <div class="skeleton rounded-md" style="height: 20px; width: 25%;"></div>
                        </div>
                        <div class="skeleton skeleton-text" style="width: 98%"></div>
                        <div class="skeleton skeleton-text" style="width: 70%"></div>
                      </div>
                    </div>
                    <div class="flex gap-4">
                      <div>
                        <div class="skeleton rounded-full" style="height: 50px; width: 50px"></div>
                      </div>
                      <div class="w-full">
                        <div class="mb-2">
                          <div class="skeleton rounded-md mb-2" style="height: 25px; width: 30%;"></div>
                          <div class="skeleton rounded-md" style="height: 20px; width: 25%;"></div>
                        </div>
                        <div class="skeleton skeleton-text" style="width: 98%"></div>
                        <div class="skeleton skeleton-text" style="width: 70%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 p-4 rounded bg-gray detail__review">
                    <h4>Add your review</h4>
                    <form>
                      <input name="name" placeholder="Enter your name" />
                      <textarea name="review" placeholder="Enter your review"></textarea>
                      <button class="btn primary w-full">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    this.id = url.id;

    try {
      this.restaurant = await RestaurantSource.getRestaurantDetail(url.id);

      if (this.restaurant.error) {
        document.querySelector('#detail').innerHTML = '<loading-error></loading-error>';
        return;
      }

      this.renderRestaurant(this.restaurant.restaurant);

      const $customerSubmit = document.querySelector('button[type=submit]');

      $customerSubmit.addEventListener('click', this.handleCustomerReviewSubmit.bind(this));
    } catch (error) {
      console.log(error);
    }

    window.scrollTo({ top: 0 });
  },
  async renderRestaurant(restaurant) {
    document.querySelector('#detail').innerHTML = generateDetailTemplate(restaurant);
  },
  async handleCustomerReviewSubmit(e) {
    e.preventDefault();

    const $customerName = document.querySelector('input[name=name]');
    const $customerReview = document.querySelector('textarea[name=review]');

    if (!$customerName.value || !$customerReview.value) {
      console.log('invalid');
    } else {
      const response = await RestaurantSource.addRestaurantReview({
        id: this.id,
        name: $customerName.value,
        review: $customerReview.value,
      });

      this.renderRestaurant({
        ...this.restaurant.restaurant,
        customerReviews: response.customerReviews,
      });
    }
  },
};

export default Detail;
