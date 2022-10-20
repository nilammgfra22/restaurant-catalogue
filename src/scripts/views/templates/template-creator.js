import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 id="content-detail" tabindex="0" class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h4>Rating</h4>
    <p>⭐️⭐️⭐️⭐️⭐️${restaurant.rating}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}, ${restaurant.city}</p>
  </div>
  <div class="restaurant__overview">
    <h4>Description of Restaurant</h4>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__categories">
    <h3>Categories</h3>
    <div class="wrapper_restaurant__categories">
    ${restaurant.categories.map((categorie) => categorie.name).join(', ')}
    </div>
  </div>
  <div class="restaurant__menu">
    <h3>Our Menu</h3>
    <div class="wrapper_restaurant__menu">
        <div class="restaurant__menu_foods">
          <div>Foods</div>
          <p>${restaurant.menus.foods.map((food) => food.name).join('<br>')}</p>
        </div>
        <div class="restaurant__menu_drinks">
          <div>Drinks</div>
          <p>${restaurant.menus.drinks.map((drink) => drink.name).join('<br>')}</p>
        </div>
    </div>
  </div>
  <div class="restaurant__reviews">
    <h3>What our customer say</h3>
    <div class="wrapper_restaurant__reviews" id="restaurant-reviews">
    ${restaurant.customerReviews.reduce((show, value) => show.concat(`
    <div class="restaurant__customerReviews-item">
        <p class="customerReviews-item__name">${value.name}</p>
        <p class="customerReviews-item__date">${value.date}</p>
        <p class="customerReviews-item__review">${value.review}</p>
    </div>
    `), '')}
    </div>
    <div class="wrapper_restaurant__addReviews">
      <h3>Give your review</h3>
        <div class="container">
        <form method="POST" id="reviewForm">
          <div class="row">
            <div class="col-25">
              <label>Name</label>
            </div>
            <div class="col-75">
              <input type="text" id="inputName" placeholder="Your name.." required>
            </div>
          </div>
          
          <div class="row">
            <div class="col-25">
              <label>Review</label>
            </div>
            <div class="col-75">
              <textarea id="inputReview" placeholder="Write something.." style="height:80px" required></textarea>
            </div>
          </div>
          <br>
          <div class="button">
            <input type="submit" id="submitReview" value="Submit">
          </div>
        </form>
        </div>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="lazyload" id="content" tabindex="0" class="restaurant-item__header__poster" alt="${restaurant.name}"
           data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" width="100%" height="250px">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
      <div class="restaurant-item__header__city">
        <p>${restaurant.city}</p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
