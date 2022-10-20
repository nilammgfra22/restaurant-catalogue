import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchRestaurant(value) {
    const response = await fetch(API_ENDPOINT.SEARCH(value));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async addCustomerReview(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default TheRestaurantDbSource;
