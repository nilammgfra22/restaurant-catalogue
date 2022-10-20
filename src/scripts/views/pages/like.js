import Swal from 'sweetalert2';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <div id="restaurants" class="restaurants"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
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

    if (restaurants.length == 0) {
      Swal.fire({
        text: 'There are no favorite restaurants yet!',
        confirmButtonColor: '#D79C43',
      });
    }
  },
};

export default Like;
