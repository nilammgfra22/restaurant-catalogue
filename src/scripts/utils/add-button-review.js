import Swal from 'sweetalert2';
import TheRestaurantDbSource from '../data/therestaurantdb-source';

const AddButtonReview = {
  async init({ id }) {
    this._id = id;

    await this._addReview(this._id);
  },

  async _addReview(restaurantId) {
    const formCustomerName = document.querySelector('#inputName');
    const formCustomerReview = document.querySelector('#inputReview');
    const reviewsContainer = document.getElementById('restaurant-reviews');

    if (formCustomerName.value === '' || formCustomerReview.value === '') {
      Swal.fire({
        text: 'Name and review data cannot be empty!',
        confirmButtonColor: '#D79C43',
      });
    } else {
      const data = {
        id: restaurantId,
        name: formCustomerName.value,
        review: formCustomerReview.value,
      };

      const result = await TheRestaurantDbSource.addCustomerReview(data);
      let addReview = '';
      result.customerReviews.forEach((review) => {
        addReview += `
          <div class="restaurant__customerReviews-item">
            <p class="customerReviews-item__name">${review.name}</p>
            <p class="customerReviews-item__date">${review.date}</p>
            <p class="customerReviews-item__review">${review.review}</p>
          </div>
        `;
      });
      reviewsContainer.innerHTML = addReview;
    }
  },
};

export default AddButtonReview;
