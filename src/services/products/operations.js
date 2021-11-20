import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { items } from './actions';

toast.configure();

export const getProducts = () => (dispatch) => {
  dispatch(items.get.request());

  const options = {
    method: 'GET',
    url: 'https://run.mocky.io/v3/a0a14b2c-7207-45f0-9a5f-cba4bd067e58',
  };
  axios(options)
    .then((res) => {
      dispatch(items.get.success(res));
    })
    .catch((err) => {
      dispatch(items.get.error(err));
      toast.error(err.message);
    });
};
