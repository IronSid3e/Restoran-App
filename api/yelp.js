import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer OiMfLD2CAlmIEUmZzJY4cf16R7Op-f1UmY_7ComFKL7ndsAyONq9sg9MbzuLkf3v2GwBC5iXyl-LZvijdm0gk9HB8RJciMTnWlZZYOoEXcc6DxoLTdCq_bRaHXZvaXYx",
  },
});
