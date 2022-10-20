import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="jumbotron">
          <picture>
            <source media="(max-width: 600px)" srcset="./images/hero-small.jpg">
            <img src='./images/hero-large.jpg' alt="Image Hero">
          </picture>
        </div>
        
        <section class="title">
            <h1>Let's find your best restaurant</h1>
            <div class="line"></div>
            <h2>Enjoy your day by eating food from your favorite restaurant.</h2>
        </section>

        <div id="restaurants" class="restaurants">
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const skipContent = document.querySelector('.skip-content');
    skipContent.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        document.querySelector('#content').focus();
      }
    });
  },
};

export default Home;
