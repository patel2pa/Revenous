const apiKey = 'sAi7GpAY6JQ64qu5OyRe2A_bAz7Q59wHHvcI27ek5Q9T85HXTPW6Pp_m5SGSrlbtTSZfESa2Ov1a0FzzpbfiDJ23BZpRwac5axjlpxtHZds8UlIMIrzQJihZF8mWXHYx'
const yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default yelp;