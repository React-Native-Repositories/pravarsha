import config from '../config';
import {get} from '../helpers/http-handler';

export const productsList = () =>
  get(`${config.API_URL}/products`);

  export const catgoryList = () =>
  get(`${config.API_URL}/categories`);

  export const subCatgoryList = () =>
  get(`${config.API_URL}/sub-categories`);
